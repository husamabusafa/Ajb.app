import { Button, Card, createStyles, Loader, Paper, Tabs } from "@mantine/core";
import alasql from "alasql";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { HeroTitle } from "../comps/main_hero";
import { NavbarMinimal } from "../comps/navBar";
import { WepContext } from "../context";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconCalendarStats,
  IconCheck,
  IconCopy,
} from "@tabler/icons";
import { CommentHtml } from "../comps/Answer";
import { StatsCard } from "../comps/ChartM";
import { useClipboard } from "@mantine/hooks";
import { Helmet } from "react-helmet";

function DashBoard() {
  const { userInfo, setUserInfo }: any = useContext(WepContext);
  const navigate = useNavigate();
  const [items, setItems]: any = useState({});
  const [answers, setanswers]: any = useState({});
  const [currentAnswers, setCurrentAnswers]: any = useState({});

  const [dataFetch, setdataFetch] = useState(false);
  const [currentItems, setCurrentItems]: any = useState(null);
  const { id }: any = useParams();
  console.log(answers);
  function myCallback() {
    console.log("fetching done");
    fetch(`https://gql.ajb.app/api/rest/ReadQ`)
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result);
        setItems(result);
        setCurrentItems(
          alasql(`select * from ? where id = "${id}"`, [result.QA])[0]
        );
      });
    fetch(`  https://gql.ajb.app/api/rest/readAnswers
      `)
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result);
        setanswers(result);
        setCurrentAnswers(
          alasql(`select * from ? where Q_id = "${id}"`, [result.Answers])
        );
      });
  }

  useEffect(() => {
    setInterval(myCallback, 3000);
    fetch(`https://gql.ajb.app/api/rest/ReadQ`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setCurrentItems(
          alasql(`select * from ? where id = "${id}"`, [result.QA])[0]
        );
      });
    fetch(`https://gql.ajb.app/api/rest/readAnswers`)
      .then((res) => res.json())
      .then((result) => {
        setanswers(result);
        setCurrentAnswers(
          alasql(`select * from ? where Q_id = "${id}"`, [result.Answers])
        );
      });
  }, []);
  if (items.QA && !dataFetch) {
    alasql(`select * from ? where id = "${id}"`, [items.QA])[0] ? (
      setCurrentItems(
        alasql(`select * from ? where id = "${id}"`, [items.QA])[0]
      )
    ) : (
      //   setCurrentAnswers(
      //     alasql(`select * from ? where Q_id = "${id}"`, [answers.Answers])
      //   )
      <></>
    );
    setdataFetch(true);
  }
  console.log("currentItems",currentItems);

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];
  const clipboard = useClipboard();

  return (
    <Body className="App">
        <Helmet>
        <title>youre question dash board</title>
      </Helmet>
      {currentItems ? (
        <>
          <Button
            onClick={() => {
              navigate("/your_questions");
            }}
            style={{
              position: "absolute",
              margin: "10px",
              left: "0",
              top: "0",
            }}
            variant="outline"
            color="gray"
            radius="lg"
            size="xl"
          >
            Back
          </Button>

          <PaperBox shadow="sm" radius="md" p="lg">
            {" "}
            <Paper
              style={{
                maxWidth: "700px",
                margin: "10px",
                maxHeight: "700px",
                overflow: "scroll",
              }}
              shadow="sm"
              radius="md"
              p="lg"
            >
              <Title>{currentItems.title}</Title>
              <Qtext>{currentItems.question}</Qtext>
            </Paper>
            <Tabs variant="outline" radius="md" defaultValue="answers">
              <Tabs.List>
                <Tabs.Tab
                  value="answers"
                  icon={<IconMessageCircle size={14} />}
                >
                  Answers
                </Tabs.Tab>
                <Tabs.Tab
                  value="messages"
                  icon={<IconCalendarStats size={14} />}
                >
                  Chart
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="answers" pt="xs">
                {currentAnswers[0] ? "Answers is" : ""}
                {currentAnswers[0] ? (
                  <AnswersBox>
                    {currentAnswers[0] ? (
                      currentAnswers.map((answers: any) => (
                        <CommentHtml
                          postedAt={
                            answers.is_true ? "correct answer" : "wrong answer"
                          }
                          body={
                            answers.answer_num === 1
                              ? currentItems.answer1
                              : answers.answer_num === 2
                              ? currentItems.answer2
                              : answers.answer_num === 3
                              ? currentItems.answer3
                              : answers.answer_num === 4
                              ? currentItems.answer4
                              : answers.answer_num === 5
                              ? currentItems.answer5
                              : answers.answer_num === 6
                              ? currentItems.answer6
                              : ""
                          }
                          author={{
                            name: answers.user_name,
                            image: !answers.is_true
                              ? "../../public/wrong.svg"
                              : "../../public/correct.svg",
                          }}
                        />
                      ))
                    ) : (
                      <></>
                    )}
                  </AnswersBox>
                ) : (
                  <>there is no answers</>
                )}
              </Tabs.Panel>

              <Tabs.Panel value="messages" pt="xs">
                <StatsCard
                  title1="correct answer"
                  title2="Percentage of those who answered correctly"
                  P100={
                    currentAnswers[0]
                      ? (alasql("Select * from ? where is_true = true", [
                          currentAnswers,
                        ]).length /
                          currentAnswers.length) *
                        100
                      : 0
                  }
                />
              </Tabs.Panel>
            </Tabs>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "250px",
              }}
            >
              {" "}
              <Button
                style={{ margin: "10px 0px" }}
                variant="light"
                rightIcon={
                  clipboard.copied ? (
                    <IconCheck size={20} stroke={1.5} />
                  ) : (
                    <IconCopy size={20} stroke={1.5} />
                  )
                }
                radius="lg"
                size="md"
                styles={{
                  root: { paddingRight: 14, height: 48 },
                  rightIcon: { marginLeft: 22 },
                }}
                onClick={() =>
                  clipboard.copy(`${import.meta.env.VITE_APP_WEP_DOMAIN}question_view/${id}`)
                }
              >
                Copy question link
              </Button>
              <a href="/your_questions">
                <Button
                  style={{ margin: "10px 0px" }}
                  color="red"
                  variant="light"
                  rightIcon={
                    <img
                      style={{ width: "30px" }}
                      src="../../public/wrong.svg"
                    />
                  }
                  radius="lg"
                  size="md"
                  styles={{
                    root: { paddingRight: 14, height: 48 },
                    rightIcon: { marginLeft: 22 },
                  }}
                  onClick={() => {
                    fetch(
                      `https://gql.ajb.app/api/rest/deleteQA?_eq1=${id}&_eq=${id}`
                    );
                    // navigate("/your_questions")
                  }}
                >
                  Delete question
                </Button>
              </a>
              <div>
                {currentItems.duration}{" "}
                {currentItems.duration <= 1 ? "minute left" : "minutes left"}
              </div>
            </div>
          </PaperBox>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Loader style={{ margin: "5px" }} size="lg" variant="bars" />
          <div
            style={{
              margin: "0px 10px",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            If the download is delayed, this means that the question is not
            available
          </div>
        </div>
      )}
    </Body>
  );
  // console.log();////
}
const Body = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PaperBox = styled(Paper)`
  max-width: 700px;
  margin: 10px;
  max-height: 700px;
  overflow: scroll;
  padding: 10px;
  width: 90%;
`;

const Title = styled.div`
  font-size: 16px;
  color: #9d9d9d;
`;
const Qtext = styled.div`
  font-size: 19px;
  color: #d2d2d2;
`;
const AnswersBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const AnswerBox = styled(Card)`
  font-size: 19px;
  color: #d2d2d2;
  margin: 10px;
`;
export default DashBoard;

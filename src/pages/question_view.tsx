import styled from "styled-components";
import { FloatingLabelInput } from "../comps/inputText";
import {
  Text,
  Paper,
  Button,
  Divider,
  PaperProps,
  Loader,
  TextInput,
} from "@mantine/core";
import alasql from "alasql";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
export function QuestionView(props: PaperProps) {
  const navigate = useNavigate();
  const { id }: any = useParams();
  const [items, setItems]: any = useState({});
  const [currentItems, setCurrentItems]: any = useState(null);
  const [dataFetch, setdataFetch] = useState(false);
  const [dir, setDir] = useState("rtl");
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [isNamed, setisNamed] = useState(true);
  const [isAnswered, setisAnswered] = useState(true);
  const [name, setName] = useState("");

  console.log(items);

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
  }

  useEffect(() => {
    setInterval(myCallback, 3000);

    fetch(`https://gql.ajb.app/api/rest/ReadQ`)
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result);
        setItems(result);
        setCurrentItems(
          alasql(`select * from ? where id = "${id}"`, [result.QA])[0]
        );
      });
  }, []);
  if (items.QA && !dataFetch) {
    alasql(`select * from ? where id = "${id}"`, [items.QA])[0] ? (
      setCurrentItems(
        alasql(`select * from ? where id = "${id}"`, [items.QA])[0]
      )
    ) : (
      <></>
    );
    setdataFetch(true);
  }
  return (
    <Body dir={dir} className="App">
      <Helmet>
        <title>answer the question</title>
      </Helmet>
      {currentItems ? (
        currentItems.duration > 0 ? (
          // @ts-ignore 
          <PaperStyled radius="md" p="xl" withBorder {...props}>
            <Header>
              {" "}
              <div style={{ margin: "-12px 0px 19px 0px", width: "198px" }}>
                {" "}
                <TextInput
                  label={dir === "ltr" ? "enter youre name" : "ادخل اسمك"}
                  placeholder={dir === "ltr" ? "name" : "الاسم"}
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  error={
                    !isNamed
                      ? dir === "ltr"
                        ? "please type your name"
                        : "الرجاء ادخل اسمك"
                      : ""
                  }
                />
              </div>{" "}
              <Button
                variant="default"
                onClick={() => {
                  setDir(dir === "ltr" ? "rtl" : "ltr");
                }}
              >
                {dir === "ltr" ? "عربي" : "English"}
              </Button>
            </Header>
            <div>
              {" "}
              <Text size="xl" weight={600}>
                {currentItems.title ? currentItems.title : ""}
              </Text>{" "}
              <Divider
                label={dir === "ltr" ? "question" : "السؤال"}
                labelPosition="center"
                my="lg"
              />
              <div style={{ margin: "-13px 0px" }}>
                <Text size="lg" weight={500}>
                  {currentItems.question ? currentItems.question : ""}
                </Text>{" "}
              </div>
              <Divider
                label={dir === "ltr" ? "answers" : "الاجابات"}
                labelPosition="center"
                my="lg"
              />
              <div style={{ margin: "-26px 0px 10px 0px" }}>
                <ButtonsBox>
                  {currentItems.answer1 ? (
                    <Button_
                      onClick={() => {
                        setCurrentAnswer(1);
                      }}
                      style={{
                        background: currentAnswer === 1 ? " #ffffff" : "",
                        color: currentAnswer === 1 ? " #000000" : "",
                      }}
                    >
                      {currentItems.answer1}
                    </Button_>
                  ) : (
                    <></>
                  )}

                  {""}
                  {""}
                  {""}
                  {""}

                  {currentItems.answer2 ? (
                    <Button_
                      onClick={() => {
                        setCurrentAnswer(2);
                      }}
                      style={{
                        background: currentAnswer === 2 ? " #ffffff" : "",
                        color: currentAnswer === 2 ? " #000000" : "",
                      }}
                    >
                      {currentItems.answer2}
                    </Button_>
                  ) : (
                    <></>
                  )}
                  {""}
                  {""}
                  {""}
                  {""}
                  {""}
                  {currentItems.answer3 ? (
                    <Button_
                      onClick={() => {
                        setCurrentAnswer(3);
                      }}
                      style={{
                        background: currentAnswer === 3 ? " #ffffff" : "",
                        color: currentAnswer === 3 ? " #000000" : "",
                      }}
                    >
                      {currentItems.answer3}
                    </Button_>
                  ) : (
                    <></>
                  )}
                  {""}
                  {""}
                  {""}
                  {""}
                  {currentItems.answer4 ? (
                    <Button_
                      onClick={() => {
                        setCurrentAnswer(4);
                      }}
                      style={{
                        background: currentAnswer === 4 ? " #ffffff" : "",
                        color: currentAnswer === 4 ? " #000000" : "",
                      }}
                    >
                      {currentItems.answer4}
                    </Button_>
                  ) : (
                    <></>
                  )}
                  {""}
                  {""}
                  {""}
                  {""}
                  {currentItems.answer5 ? (
                    <Button_
                      onClick={() => {
                        setCurrentAnswer(5);
                      }}
                      style={{
                        background: currentAnswer === 5 ? " #ffffff" : "",
                        color: currentAnswer === 5 ? " #000000" : "",
                      }}
                    >
                      {currentItems.answer5}
                    </Button_>
                  ) : (
                    <></>
                  )}
                  {""}
                  {""}
                  {""}
                  {""}
                  {currentItems.answer6 ? (
                    <Button_
                      onClick={() => {
                        setCurrentAnswer(6);
                      }}
                      style={{
                        background: currentAnswer === 6 ? " #ffffff" : "",
                        color: currentAnswer === 6 ? " #000000" : "",
                      }}
                    >
                      {currentItems.answer6}
                    </Button_>
                  ) : (
                    <></>
                  )}
                </ButtonsBox>
                <div style={{ color: "red" }}>
                  {isAnswered ? "" : "please choose an answer"}
                </div>
              </div>
              <Box>
                <Duration_>
                  {dir === "ltr"
                    ? `${currentItems.duration} minut${
                        currentItems.duration !== 1 ? "s" : ""
                      }`
                    : currentItems.duration === 1
                    ? "دقيقه"
                    : currentItems.duration === 2
                    ? "دقيقتان"
                    : currentItems.duration < 11
                    ? `${currentItems.duration} دقائق`
                    : `${currentItems.duration} دقيقه`}
                </Duration_>

                <Button
                  color="yellow"
                  radius="md"
                  size="md"
                  onClick={() => {
                    if (currentAnswer === 0) {
                      setisAnswered(false);
                    }
                    if (!name) {
                      setisNamed(false);
                    }
                    if (currentAnswer > 0 && name) {
                      if (currentAnswer === currentItems.trueAnswer) {
                        fetch(
                          `https://gql.ajb.app/api/rest/addAnswer?is_true=true&answer_num=${currentAnswer}&Q_id=${currentItems.id}&user_name=${name}`
                        );
                      } else {
                        fetch(
                          `https://gql.ajb.app/api/rest/addAnswer?is_true=false&answer_num=${currentAnswer}&Q_id=${currentItems.id}&user_name=${name}`
                        );
                      }
                      console.log("done");
                      navigate(
                        `/question_view/finish/${id}/${Math.pow(
                          currentAnswer + 5,
                          11
                        )}`
                      );
                    }
                  }}
                >
                  {dir === "ltr" ? "submit" : "ارسال"}
                </Button>
              </Box>
            </div>
            
          </PaperStyled>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
            }}
          >
            {" "}
            <div>sorry you are late</div>
            <div>للاسف لقد تأخرت</div>
          </div>
        )
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <Loader
            color="yellow"
            style={{ margin: "5px" }}
            size="lg"
            variant="bars"
          />
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
      <div style={{width:"20px",minHeight:"100px"}}/>
    </Body>
  );
}
const Body = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  padding-top: 10px;
/* margin-bottom: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-height: 1080px) {
    /* justify-content: start; */
    @media (max-width: 601px) {
      justify-content: start;
    }
  }
  @media (max-height: 628px) {
    /* justify-content: start; */
    @media (min-width: 601px) {
      justify-content: start;
    }
  }
`;

const PaperStyled = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  max-width: 700px;
  min-width: 400px;
`;

const Box = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 9px;
  background: #232428;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`;

const Duration_ = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;
const Button_ = styled.div`
  margin: 20px;
  border-radius: 11px;
  background: #161616;
  padding: 13px;
  cursor: pointer;
  font-size: 20px;
`;
const ButtonsBox = styled.div`
  /* width: 100%;   */

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 0px 0px;

  @media (max-width: 460px) {
    flex-direction: column;
    align-items: start;
    margin: -12px 0px 11px 0px;
  }
`;

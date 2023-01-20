import { Button, Card, createStyles, Loader, Paper } from "@mantine/core";
import alasql from "alasql";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HeroTitle } from "../comps/main_hero";
import { NavbarMinimal } from "../comps/navBar";
import { WepContext } from "../context";

function YoureQ() {
  const { userInfo, setUserInfo }: any = useContext(WepContext);
  const navigate = useNavigate();
  const [items, setItems]: any = useState({});
  const [dataFetch, setdataFetch] = useState(false);
  const [currentItems, setCurrentItems]: any = useState(null);
  const [isError, setIsError]: any = useState({});

  
  useEffect(() => {
    fetch(`https://gql.ajb.app/api/rest/ReadQ`)
      .then((res) => res.json())
      .then(
        (result) => {
        //   console.log(result);
        setItems(result);
      },
    
      );
  }, []);

  if (items.QA && !dataFetch) {
    alasql(`select * from ? where username = "${userInfo.userName}"`, [
      items.QA,
    ])[0] ? (
      setCurrentItems(
        alasql(`select * from ? where username = "${userInfo.userName}"`, [
          items.QA,
        ])
      )
    ) : (
      setCurrentItems(
       {}
      )
    );
    setdataFetch(true);
  }
  console.log(currentItems);
  return (
    <Body className="App">
      <Helmet>
        <title>your question</title>
      </Helmet>
      <Button
        onClick={() => {
          navigate("/home_page");
        }}
        style={{ position: "absolute", margin: "10px", left: "0", top: "0" }}
        variant="outline"
        color="gray"
        radius="lg"
        size="xl"
      >
        Back
      </Button>

      <Paper
        style={{
          maxWidth: "700px",
          margin: "10px",
          maxHeight: "700px",
          overflow: "scroll",
          padding: "10px",
        }}
        shadow="sm"
        radius="md"
        p="lg"
      >
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
          This is your questions to see all info about any question click on it
          and if you want to delete it click on it and click delete.
        </Paper>
        {currentItems?currentItems[0] ? (
          currentItems.map((item: any) => (
            <Card
              style={{ maxWidth: "700px", margin: "10px", maxHeight: "700px" ,cursor:"pointer"}}
              shadow="sm"
              radius="md"
              p="lg"
              onClick={() => {
                navigate(`/your_questions/dash_board/${item.id}`);
              }}
            >
              <Title>{item.title}</Title>
              {item.question}
            </Card>
          ))
        ) : (
          <NoQbox>
            there is no question{" "}
            <Button
              onClick={() => {
                navigate(`/question_builder`);
              }}
              style={{ margin: "10px 0px" }}
              radius="md"
              size="xl"
              compact
            >
              Add question
            </Button>
          </NoQbox>
        ):<div style={{width:"100%",display:"flex",justifyContent:"center"}}><Loader color="yellow" size="lg" /></div>}
      </Paper>
    </Body>
  );
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
const Title = styled.div`
  font-size: 14px;
  color: #9d9d9d;
`;
const NoQbox = styled.div`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  width: 200px;
`;
export default YoureQ;

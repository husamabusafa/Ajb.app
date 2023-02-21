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

  
  function myCallback() {
    console.log("fetching done");
    fetch(`https://gql.ajb.app/api/rest/ReadQ`)
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result);
        setItems(result);
        setCurrentItems(
          alasql(`select * from ? where username = "${userInfo.userName}"`, [
            result.QA,
          ])
        )
      });
  }
  useEffect(() => {
    setInterval(myCallback, 3000);
    fetch(`https://gql.ajb.app/api/rest/ReadQ`)
      .then((res) => res.json())
      .then(
        (result) => {
        //   console.log(result);
        setItems(result);
      },
    
      );
  }, []);

  if (items.QA && !dataFetch && userInfo) {
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
  console.log("items",userInfo);
  return (
    <Body className="App">
      <Helmet>
        <title>your question</title>
      </Helmet>
     {userInfo? <><Button
        onClick={() => {
          navigate("/home_page");
        }}
        style={{ position: "absolute", margin: "10px", left: "0", top: "0" }}
        // variant="outline"
        color="gray"
        radius="md"
        size="sm"
      >
        رجوع
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
          هذه هي أسئلتك لرؤية جميع المعلومات حول أي سؤال اضغط عليه
          وإذا كنت تريد حذفه ، فانقر عليه وانقر على حذف.
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
              <SpaceB>{item.question}<Duration>{item.duration<100000?item.duration>0?`${item.duration}`:"انتهت":"لا نهائي"}</Duration></SpaceB>
            </Card>
          ))
        ) : (
          <NoQbox>
            لا توجد اسئلة{" "}
            <Button
              onClick={() => {
                navigate(`/question_builder`);
              }}
              style={{ margin: "10px 0px" }}
              radius="md"
              size="xl"
              compact
            >
              اضف سؤال
            </Button>
          </NoQbox>
        ):<div style={{width:"100%",display:"flex",justifyContent:"center"}}><Loader color="yellow" size="lg" /></div>}
        <div style={{width:"20px",minHeight:"100px"}}/>
      </Paper></>:"please login"}
      
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
const SpaceB = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content:space-between;
  align-items:center;
`;
const Duration = styled.div`

`;
export default YoureQ;

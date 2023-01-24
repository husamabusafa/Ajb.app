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
  Modal,
} from "@mantine/core";
import alasql from "alasql";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
export function FinishPage(props: PaperProps) {
  const navigate = useNavigate();
  const { id , Anum }: any = useParams();
  const [items, setItems]: any = useState({});
  const [currentItems, setCurrentItems]: any = useState(null);
  const [dataFetch, setdataFetch] = useState(false);
  const [resOpen, setResOpen] = useState(false);

  useEffect(() => {
    fetch(`https://gql.ajb.app/api/rest/ReadQ`)
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result);
        setItems(result);
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
  console.log(currentItems); 
  console.log("Anum",Math.pow(Anum, 1/11)-5);

  return (
    <Body className="App">
        <Helmet>
        <title>finish! thanks for answer</title>
      </Helmet>
     {currentItems?<> <ImgBox>
        <Img src="/Test.png" />
      </ImgBox>
      {currentItems.showAnswers ? (
        <div
          style={{
            margin: "10px 0px",
          }}
        >
          <Button
            onClick={() => {
              resOpen ? setResOpen(false) : setResOpen(true);
            }}
            color="yellow"
            radius="md"
            size="xl"
            compact
          >
            اظهار النتيجة
          </Button>
          <Modal
            withCloseButton={false}
            opened={resOpen}
            centered
            onClose={() => {
              setResOpen(false);
            }}
          >
            This is your answer and i wish you choose the correct one.
            {currentItems.answer1?<AnswerBox>
              {" "}
             {currentItems.answer1}
             <Header> 
                {currentItems.trueAnswer===1?<MiniImg src="/correct.svg"/>:<MiniImg src="/wrong.svg"/>}
                {Math.pow(Anum, 1/11)-5==1?<MiniImg src="/YoureA.svg"/>:<MiniImg src=""/>}
              </Header>
            </AnswerBox>:<></>}
            {currentItems.answer2?<AnswerBox>
              {" "}
             {currentItems.answer2}
             <Header> 
                {currentItems.trueAnswer===2?<MiniImg src="/correct.svg"/>:<MiniImg src="/wrong.svg"/>}
                {Math.pow(Anum, 1/11)-5==2?<MiniImg src="/YoureA.svg"/>:<MiniImg src=""/>}
              </Header>
            </AnswerBox>:<></>}
            {currentItems.answer3?<AnswerBox>
              {" "}
             {currentItems.answer3}
             <Header> 
                {currentItems.trueAnswer===3?<MiniImg src="/correct.svg"/>:<MiniImg src="/wrong.svg"/>}
                {Math.pow(Anum, 1/11)-5==3?<MiniImg src="/YoureA.svg"/>:<MiniImg src=""/>}              </Header>
            </AnswerBox>:<></>}
            {currentItems.answer4?<AnswerBox>
              {" "}
             {currentItems.answer4}
             <Header> 
                {currentItems.trueAnswer===4?<MiniImg src="/correct.svg"/>:<MiniImg src="/wrong.svg"/>}
                {Math.pow(Anum, 1/11)-5==4?<MiniImg src="/YoureA.svg"/>:<MiniImg src=""/>}              </Header>
            </AnswerBox>:<></>}
            {currentItems.answer5?<AnswerBox>
              {" "}
             {currentItems.answer5}
             <Header> 
                {currentItems.trueAnswer===5?<MiniImg src="/correct.svg"/>:<MiniImg src="/wrong.svg"/>}
                {Math.pow(Anum, 1/11)-5==5?<MiniImg src="/YoureA.svg"/>:<MiniImg src=""/>}              </Header>
            </AnswerBox>:<></>}
            {currentItems.answer6?<AnswerBox>
              {" "}
             {currentItems.answer6}
             <Header> 
                {currentItems.trueAnswer===6?<MiniImg src="/correct.svg"/>:<MiniImg src="/wrong.svg"/>}
                {Math.pow(Anum, 1/11)-5==6?<MiniImg src="/YoureA.svg"/>:<MiniImg src=""/>}              </Header>
            </AnswerBox>:<></>}
          </Modal>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Button
            style={{ margin: "10px 0px" }}
            color="yellow"
            radius="md"
            size="xl"
            compact
            disabled
          >
            اظهار النتيجة
          </Button>
          كاتب السؤال لم يفعل اظهار النتيجة
        </div>
      )}</>: <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Loader color="yellow" style={{ margin: "5px" }} size="lg" variant="bars" />
          <div
            style={{
              margin: "0px 10px",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
          
          </div>
        </div>}
        <div style={{width:"20px",minHeight:"100px"}}/>
    </Body>
  );
}
const Body = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const ImgBox = styled.div`
  background: #2c2c2c;
  padding: 28px;
  border-radius: 18px;
  margin: 20px;
  @media (max-width: 506px) {
    border-radius: 14px;
    padding: 20px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const AnswerBox = styled.div`
  background: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  display: flex;
    align-items: center;
    justify-content: space-between;
  /* @media (max-width: 506px) {
    border-radius: 14px;
    padding: 20px;
  } */
`;

const MiniImg = styled.img`
width: 28px;
margin:2px;
`;

const Header = styled.div`
display: flex;
flex-direction: column;
`;
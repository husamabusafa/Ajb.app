import { createStyles, Container, Text, Button, Group } from "@mantine/core";
import { GithubIcon } from "@mantine/ds";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";
import { WepContext } from "../context";

export function LearnMore() {
  const navigate = useNavigate();
  return (
    <Body>
      <Helmet>
        <title>learn more aboute site</title>
      </Helmet>
      <img src="../../public/logo.svg"
        style={{
          height: "100px",
          width: "100px",
          background: "#313131",
          borderRadius: "1000px",
          margin: "40px 0px 0px 0px",
        }}
      />
      <div
        style={{
          margin: "40px 10px 5px 10px",
          textAlign: "center",
          maxWidth: "600px",
          fontSize: "26px",
        }}
      >
        how to build question
      </div>
      <div
        style={{
          margin: "0px 10px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        You can write a question and the title, then select the number of
        answers, write the answers, and specify if you want the results to
        appear to the person or not, then click on “public” and copy the link,
        then send it to whoever you want to answer
      </div>
      <div
        style={{
          margin: "40px 10px 5px 10px",
          textAlign: "center",
          maxWidth: "600px",
          fontSize: "26px",
        }}
      >
        how to view the answers
      </div>
      <div
        style={{
          margin: "0px 10px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        Go to "Your Questions" to see your questions that you have created
        before and click on the question to see who answered the question,
        whether he answered correctly or not, what his answer was and the
        percentage of those who answered correctly How much is left is the
        question
      </div>
      <div
        style={{
          margin: "40px 10px 5px 10px",
          textAlign: "center",
          maxWidth: "600px",
          fontSize: "14px",
        }}
      >
        The developer of this site is<Name> Husam Abusafa</Name>
      </div>
      <Button
        onClick={() => {
          navigate("/home_page");
        }}
        color="gray"
      >
        Back
      </Button>
    </Body>
  );
}
const Body = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
const Name = styled.div`
  color: #ffd500;
`;

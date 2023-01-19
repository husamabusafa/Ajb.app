import { Button, createStyles } from "@mantine/core";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HeroTitle } from "../comps/main_hero";
import { NavbarMinimal } from "../comps/navBar";
import { WepContext } from "../context";
import { Helmet } from "react-helmet";

function HomePage() {
  const { userInfo, setUserInfo }: any = useContext(WepContext);
  const navigate = useNavigate();

  return (
    <Body className="App">
       <Helmet>
        <title>the main page</title>
      </Helmet>
      <NavBar>
        <NavbarMinimal />
      </NavBar>
      <HeroTitle />

      {/* <Button style={{position: 'absolute',margin:"10px",left:"0"}}variant="outline" color="gray" radius="lg" size="xl" >
      profile
    </Button> */}
      {userInfo ? (
        <>
          <Button_
            onClick={() => {
              setUserInfo(null);
            }}
            style={{ position: "absolute", margin: "10px", left: "0" }}
            variant="outline"
            color="gray"
            radius="lg"
            size="xl"
          >
            Log out
          </Button_>
          <Button_
            style={{ position: "absolute", margin: "10px", right: "0" }}
            variant="outline"
            color="gray"
            radius="lg"
            size="xl"
            onClick={() => {
              navigate("/your_questions")
            }}
          >
            Your questions
          </Button_>
          <Button_
            style={{
              position: "absolute",
              margin: "10px",
              right: "0",
              bottom: "0",
            }}
            variant="outline"
            color="gray"
            radius="lg"
            size="xl"
            onClick={() => {
              navigate("/question_builder")
            }}
          >
            Add question
          </Button_>

          <Button__
            onClick={() => {
              setUserInfo(null);
            }}
            style={{ position: "absolute", margin: "10px", left: "0" }}
            variant="outline"
            color="gray"
            radius="lg"
            size="md"
          >
            Log out
          </Button__>
          <Button__
            style={{ position: "absolute", margin: "10px", right: "0" }}
            variant="outline"
            color="gray"
            radius="lg"
            size="md"
            onClick={() => {
              navigate("/your_questions")
            }}
          >
            Your questions
          </Button__>
        </>
      ) : (
        <> <Button
        onClick={() => {
          navigate("/login")
        }}
        style={{ position: "absolute", margin: "10px", left: "0" }}
        variant="outline"
        color="gray"
        radius="lg"
        size="xl"
      >
        Log in
      </Button></>
      )}
    </Body>
  );
}
const Body = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0px 1.8fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "navBar page";
  /* position: relative; */
`;

const NavBar = styled.div`
  /* height:100vh; */
  grid-area: navBar;
`;

const Page = styled.div`
  /* height:100vh; */
  grid-area: page;
`;
const Button_ = styled(Button)`
  @media (max-width: 378px) {
    display: none;
  }
`;

const Button__ = styled(Button)`
  @media (min-width: 378px) {
    display: none;
  }
`;
export default HomePage;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import styled from "styled-components";
import { Loader } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Splash() {
  const navigate = useNavigate();
  const [isnavigate, setIsnavigate] = useState(true);

  function navigation() {
    navigate("/home_page");
    // setIsnavigate(false)
  }
  useEffect(() => {
    setTimeout(navigation, 1500);
  });
  return (
    <Body>
      <Helmet>
        <title>please wait</title>
      </Helmet>
      <Logo src="public/logo.svg" />
      <AJBtitle>AJB</AJBtitle>
      <AJBtitle_ar>أجب</AJBtitle_ar>
      <Loader color="yellow" size="lg" variant="bars" />
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
`;
const Logo = styled.img`
  height: 200px;
  width: 200px;
`;
const AJBtitle = styled.div`
  font-size: 36px;
  margin: 10px 0px;
`;
const AJBtitle_ar = styled.div`
  font-size: 36px;
  margin-top: -20px;
`;
export default Splash;

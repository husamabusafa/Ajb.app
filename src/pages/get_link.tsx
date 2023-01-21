import { Button, createStyles, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { HeroTitle } from "../comps/main_hero";
import { NavbarMinimal } from "../comps/navBar";
import { WepContext } from "../context";
import { IconCopy, IconCheck } from '@tabler/icons';
import { Helmet } from "react-helmet";

function GetLink() {
  const { userInfo, setUserInfo }: any = useContext(WepContext);
  const navigate = useNavigate();
  const clipboard = useClipboard();
  const {id} = useParams()

  return (
    <Body className="App">
       <Helmet>
        <title>copy the link</title>
      </Helmet>
<div  style={{
              margin: "20px 10px",
              textAlign: "center",
              maxWidth: "400px",
            }}>copy the link and send it to any one you want him to answer your question</div>
<Tooltip style={{margin:"10px"}}
      label="Link copied!"
      offset={5}
      position="bottom"
      radius="xl"
      transition="slide-down"
      transitionDuration={100}
      opened={clipboard.copied}
    >
      <Button
        variant="light"
        rightIcon={
          clipboard.copied ? (
            <IconCheck size={20} stroke={1.5} />
          ) : (
            <IconCopy size={20} stroke={1.5} />
          )
        }
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: 14, height: 48 },
          rightIcon: { marginLeft: 22 },
        }}
        onClick={() => clipboard.copy(`${import.meta.env.VITE_APP_WEP_DOMAIN}question_view/${id}`)}
      >
        Copy link to clipboard
      </Button>
    </Tooltip>
    <Button onClick={()=>{navigate("/home_page")}} style={{margin:"10px"}} color="gray" radius="md" size="md">
      back to home
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
    justify-content: center;
    align-items: center;
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
export default GetLink;

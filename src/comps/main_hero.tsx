import { createStyles, Container, Text, Button, Group } from "@mantine/core";
import { GithubIcon } from "@mantine/ds";
import { useContext } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";
import { WepContext } from "../context";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 20,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function HeroTitle() {
  const { userInfo, setUserInfo }: any = useContext(WepContext);

  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          with{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Ajb
          </Text>{" "}
          you can build questions and share it.
        </h1>

        <Text className={classes.description} color="dimmed">
          {/* If you have any question, write it down and share it with whoever you want to answer. Select the number of answers and fill in, you can decide whether the result is displayed or not, good luck. */}
          Do you have some questions and want to ask them to some people? Write
          down your question and answers , specify the time it takes to answer
          it, Copy the link and send it to whoever you want. Good luck
        </Text>

       {userInfo? <><Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            onClick={() => {
              navigate(`/question_builder`);
            }}
          >
            Build Question
          </Button>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "#9726ff", to: "#0041d4" }}
            onClick={() => {
              navigate(`/your_questions`);
            }}
          >
            Your Question
          </Button>
        </Group>
        <Group style={{ marginTop: "14px" }} className={classes.controls}>
          <Button
            component="a"
            href="https://github.com/husamabusafa/Ajb.app"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "red", to: "orange" }}
            onClick={() => {
              navigate(`/learn_more`);
            }}
          >
            Learn more
          </Button>
          <Button
            component="a"
            size="xl"
            variant="default"
            className={classes.control}
            onClick={() => {
              setUserInfo(null);
            }}
            // leftIcon={<GithubIcon size={20} />}
          >
            log out
          </Button>
          please click on learn more to know how to use the web
        </Group></>:
         <><Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            onClick={() => {
              navigate("/login")
            }}
          >
            Login
          </Button>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "#9726ff", to: "#0041d4" }}
            onClick={() => {
              navigate("/create_acount")
            }}
          >
            Create Acount
          </Button>
        </Group>
        <Group style={{ marginTop: "14px" }} className={classes.controls}>
          <Button
            component="a"
            href="https://github.com/husamabusafa/Ajb.app"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "red", to: "orange" }}
            onClick={() => {
              navigate(`/learn_more`);
            }}
          >
            Learn more
          </Button>
          
          please click on learn more to know how to use the web
        </Group></>}
      </Container>
    </div>
  );
}

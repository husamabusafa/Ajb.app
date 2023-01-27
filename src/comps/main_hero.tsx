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
        مع {" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Ajb
          </Text>{" "}
          يمكنك بناء الأسئلة ومشاركتها.
        </h1>

        <Text className={classes.description} color="dimmed">
          {/* If you have any question, write it down and share it with whoever you want to answer. Select the number of answers and fill in, you can decide whether the result is displayed or not, good luck. */}
          هل لديك بعض الأسئلة وتريد طرحها على بعض الأشخاص؟ اكتب سؤالك وإجاباتك ، وحدد الوقت المستغرق للإجابة عليه ، وانسخ الرابط وأرسله لمن تريد. حظ سعيد
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
            بناء السؤال
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
            الأسئلة الخاصة بك
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
        معرفة المزيد
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
            تسجيل الخروج
          </Button>
         
الرجاء النقر فوق "معرفة المزيد" لمعرفة كيفية استخدام الويب
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
            تسجيل الدخول
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
            إنشاء حساب
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
           معرفة المزيد
          </Button>
          
          الرجاء النقر فوق "معرفة المزيد" لمعرفة كيفية استخدام الويب
        </Group></>}
      </Container>
      <div style={{width:"20px",minHeight:"100px"}}/>
    </div>
  );
}

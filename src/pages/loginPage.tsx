import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

import PocketBase from "pocketbase";
import alasql from "alasql";

import { useContext, useState } from "react";
import { WepContext } from "../context";
import { Helmet } from "react-helmet";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.pexels.com/photos/2271683/pexels-photo-2271683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
const pb = new PocketBase("https://base.ajb.app/");

export function LoginPage() {
  const { classes } = useStyles();
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const { userInfo, setUserInfo }: any = useContext(WepContext);
  const navigate = useNavigate();

  return (
    <div  dir="ltr" className={classes.wrapper} style={{ height: "100vh" }}>
      <Helmet>
        <title>log in now</title>
      </Helmet>
      <Paper
        className={classes.form}
        radius={0}
        p={30}
        style={{ height: "100vh" }}
      >
        <Title
        dir="rtl"
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
         أهلا بكم من جديد في اجب!
        </Title>

        <TextInput label="username" placeholder="Your username" size="md"onChange={(e)=>{setUserName(e.target.value)}}/>
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        {/* <Checkbox label="Keep me logged in" mt="xl" size="md" /> */}
        <Button
          fullWidth
          mt="xl"
          size="md"
          onClick={() => {
            const resultList =  pb.collection('ajb_users').getList(1, 50000, {
          }).then((result: any) => {
            console.log(result);
            
            alasql(`select * from ? where useName = "${userName}"`,[result.items])[0]?.password===password?setError(false):setError(true)
            alasql(`select * from ? where useName = "${userName}"`,[result.items])[0]?.password===password?setUserInfo({
              id: alasql(`select * from ? where useName = "${userName}"`,[result.items])[0].id,
              name: alasql(`select * from ? where useName = "${userName}"`,[result.items])[0].name,
              userName: alasql(`select * from ? where useName = "${userName}"`,[result.items])[0].useName,
            }):<></>
            alasql(`select * from ? where useName = "${userName}"`,[result.items])[0]?.password===password?navigate("/home_page"):<></>

          });;
           
              
          }}
        >
          تسجيل الدخول
        </Button>

        <Text align="center" mt="md">
          لا تملك حساب؟{"  "}
          <Anchor<"a">
            href="#"
            weight={700}
            onClick={(event) => {event.preventDefault();navigate("/create_acount")}}
            >
            انشاء حساب جديد
          </Anchor>
        </Text><div style={{color:"#ff5c5c"}}>{error?"there is an error please check your username or your password":<></>}</div>
      </Paper>
      
    </div>
  );
}

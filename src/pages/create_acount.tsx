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
  
  export function CreateAcount() {
    const { classes } = useStyles();
    const [userName, setUserName] = useState("")
    const [name, setName] = useState("")

    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const { userInfo, setUserInfo }: any = useContext(WepContext);
    const navigate = useNavigate();
  
    return (
      <div  className={classes.wrapper} style={{ height: "100vh" }}>
          <Helmet>
        <title>create your acount</title>
      </Helmet>
        <Paper
          className={classes.form}
          radius={0}
          p={30}
          style={{ height: "100vh" }}
        >
          <Title
          dir="ltr"
            order={2}
            className={classes.title}
            align="center"
            mt="md"
            mb={50}
          >
            !انشئ حسابك
          </Title>
  
          <TextInput label="الاسم المستخدم" placeholder="ادخل اسم المستخدم" size="md"onChange={(e)=>{setUserName(e.target.value)}}/>
          <TextInput label="الاسم الكامل" placeholder="اسمك الاول و الاخير" size="md"onChange={(e)=>{setName(e.target.value)}}/>
          <PasswordInput
            label="الكلمة السرية"
            placeholder="ادخل الكلمة السرية"
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
              if(alasql(`select * from ? where useName = "${userName}"`,[result.items])[0]){setError(true)}else{
                 pb.collection('ajb_users').create({
                  name: name,
                  useName:userName ,
                  password: password,
              }).then((result) => {
                console.log(result) 
                setUserInfo({
                    id: result.id,
                    name: result.name,
                    userName: userName,
                  })
              });
            //   console.log(alasql(`select * from ? where useName = "${userName}"`,[result.items])[0].id,) 
            navigate("/home_page")
              }
            
            });
             
                
            }}
          >
          انشاء حساب
          </Button>
  
        <div style={{color:"#ff5c5c"}}>{error?"there is an error youre username is taken":<></>}</div>
        </Paper>
      </div>
    );
  }
  
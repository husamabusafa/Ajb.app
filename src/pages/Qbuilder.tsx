import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import styled from "styled-components";
import { NavbarMinimal } from "../comps/navBar";
import {
  ColorSchemeProvider,
  MantineProvider,
  NumberInput,
  Radio,
  Select,
  Slider,
  Textarea,
} from "@mantine/core";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { FloatingLabelInput } from "../comps/inputText";
import { GradientSegmentedControl } from "../comps/chooseComp";
import { LabelInput } from "../comps/answerInput";
import { WepContext } from "../context";
// import CompComp from '../comps/comp_comp'

function Qbuilder() {
  return (
    <Body dir="rtl" className="App">
      <AuthenticationForm />
      <div style={{ width: "20px", minHeight: "100px" }} />
    </Body>
  );
}
const Body = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  @media (max-height: 1080px) {
    /* justify-content: start; */
    @media (max-width: 601px) {
      justify-content: start;
    }
  }
  @media (max-height: 628px) {
    /* justify-content: start; */
    @media (min-width: 601px) {
      justify-content: start;
    }
  }
`;

const AnswersBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* background-color: #151515; */
  margin-top: -27px;
  border-radius: 10px;
`;

export default Qbuilder;
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { Helmet } from "react-helmet";

export function AuthenticationForm(props: PaperProps) {
  const [Anumber, setAnumber] = useState(2);
  const [Qdata, setQdata]: any = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    A5: "",
    A6: "",
  });

  const [Title, setTitle] = useState("");

  const [Question, setQuestion] = useState("");

  const [Duration, setDuration] = useState(0);

  const [TrueAnswer, setTrueAnswer] = useState(0);

  const [showAnswers, setShowAnswers] = useState(false);

  const [isTitle, setIsTitle] = useState(true);

  const [isQuestion, setIsQuestion] = useState(true);

  const [isDuration, setIsDuration] = useState(true);

  const [isTrueAnswer, setIsTrueAnswer] = useState(true);
  const [isAnswer, setIsAnswer] = useState(true);
  const { userInfo, setUserInfo }: any = useContext(WepContext);
  // console.log(showAnswers);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
  });
  console.log(Qdata);
  return (
    <>
      {" "}
      <Helmet>
        <title>build your own question</title>
      </Helmet>
      {userInfo ? ( // @ts-ignore
        <PaperStyled radius="md" p="xl" withBorder {...props}>
          <div>
            {" "}
            <Text size="lg" weight={500}>
              انشئ سؤالك
            </Text>{" "}
            <Divider label="question info" labelPosition="center" my="lg" />
            <Stack>
              
              <TextInput
                required
                label="العنوان"
                placeholder="اكتب العنوان"
                // value={form.values.name}
                onChange={(e: any) => {
                  setTitle(e.target.value);
                }}
                error={!isTitle ? "please type someThing" : ""}
              />

              <Textarea
              style={{    textAlign: "right"}}
                required
                label="السؤال"
                placeholder="اكتب سؤالك"
                // value={form.values.name}
                onChange={(e: any) => {
                  setQuestion(e.target.value);
                }}
                error={!isQuestion ? "رجاء اكتب سؤالك" : ""}
              />
            </Stack>
            <Divider label="عن السؤال" labelPosition="center" my="lg" />
            <Stack>
              <Select
                required
                label="مدة صلاحية السؤال"
                  placeholder="حدد بعد كم سينتهي السؤال"
                onChange={(e: any) => {
                  setDuration(e);
                }}
                error={!isDuration ? "رجاء حدد المدة" : ""}
                data={[
                  { value: "10", label: "١٠ دقائق" },
                  { value: "30", label: "نصف ساعة" },
                  { value: "60", label: "ساعة" },
                  { value: "180", label: "٣ ساعات" },
                  { value: "720", label: "١٢ ساعة" },
                  { value: "1440", label: "يوم" },
                  { value: "4320", label: "٣ ايام" },
                  { value: "10030", label: "اسبوع" },
                  { value: "100000", label: "ليس له نهاية" },
                ]}
              />

              {/* <NumberInput
            required
            label="True Answer Number"
            placeholder="type 1 if answer1 is true"
            onChange={(e: any) => {
              setTrueAnswer(e);
            }}
            error={
              !isTrueAnswer ? `please type a number from one to ${Anumber}` : ""
            }
          /> */}
              {/* <Select
                onChange={(e: any) => {
                  setTrueAnswer(e);
                }}
                error={!isTrueAnswer ? `رجاء اختر رقم من 1 الى ${Anumber}` : ""}
                label="رقم الاجابة الصحيحة"
                placeholder="اختر رقم الاجابة الصحيحة"
                data={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "6", label: "6" },
                ]}
              /> */}
              <div style={{maxWidth:"200px",textAlign:"center"}}>اضغط على الدائرة التي تقع يمين الاجابة لتحدد ان هذه الاجابة هي الصحيحه </div>
            </Stack>
          </div>{" "}
          <BoxA>
            <Divider label="عدد الأجوبة" labelPosition="center" my="lg" />
            <div style={{ marginTop: "-10px", width: "100%" }}>
              <GradientSegmentedControl
                c1="2"
                c2="3"
                c3="4"
                c4="5"
                c5="6"
                onChange={(e: any) => {
                  setAnumber(e);
                }}
              />
            </div>
            <Divider label="الأجوبة" labelPosition="center" my="lg" />
            <Radio.Group 
                            error={!isTrueAnswer ? `رجاء حدد الاجابة الصحيحة` : ""}

             onChange={(e:any) => {
                      console.log(e);
                      setTrueAnswer(e)
                    }}>
              <AnswersBox>
              {isAnswer ? (
                  <></>
                ) : (
                  <p
                    style={{
                      color: "red",
                      marginTop: "-11px",
                      marginBottom: "-8px",
                    }}
                  >
                    رجاء اكتب جميع الأجوبة
                  </p>
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "center",
                  }}
                >
                  <LabelInput
                    value={Qdata?.A1}
                    label=""
                    placeholder="الأجابة الأولى"
                    onChange={(e: any) => {
                      setQdata({
                        A1: e.target.value,
                        A2: Qdata?.A2,
                        A3: Qdata?.A3,
                        A4: Qdata?.A4,
                        A5: Qdata?.A5,
                        A6: Qdata?.A6,
                      });
                    }}
                  />
                  <Radio
                    style={{
                      marginRight: "5px",
                      marginLeft: "5px",
                      marginBottom: "8px",
                    }}
                    value="1"
                    color="green"
                   
                  />
                  {/* <Checkbox
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    marginBottom: "6px",
                  }}
                  onChange={() => setTrueAnswer(1)}
                  
                  color="yellow"
                  radius="md"
                  size="md"
                /> */}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "center",
                  }}
                >
                  <LabelInput
                    value={Qdata?.A2}
                    label=""
                    placeholder="الأجابة الأولى"
                    onChange={(e: any) => {
                      setQdata({
                        A1: Qdata?.A1,
                        A2: e.target.value,
                        A3: Qdata?.A3,
                        A4: Qdata?.A4,
                        A5: Qdata?.A5,
                        A6: Qdata?.A6,
                      });
                    }}
                  />
                  <Radio
                    style={{
                      marginRight: "5px",
                      marginLeft: "5px",
                      marginBottom: "8px",
                    }}
                    value="2"
                    color="green"
                  />
                </div>

                {Anumber > 2 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                    }}
                  >
                    <LabelInput
                      value={Qdata?.A3}
                      label=""
                      placeholder="الأجابة الأولى"
                      onChange={(e: any) => {
                        setQdata({
                          A1: Qdata?.A1,
                          A2: Qdata?.A2,
                          A3: e.target.value,
                          A4: Qdata?.A4,
                          A5: Qdata?.A5,
                          A6: Qdata?.A6,
                        });
                      }}
                    />
                    <Radio
                      style={{
                        marginRight: "5px",
                        marginLeft: "5px",
                        marginBottom: "8px",
                      }}
                      value="3"
                      color="green"
                    />
                  </div>
                ) : (
                  <></>
                )}
                {Anumber > 3 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                    }}
                  >
                    <LabelInput
                      value={Qdata?.A4}
                      label=""
                      placeholder="الأجابة الأولى"
                      onChange={(e: any) => {
                        setQdata({
                          A1: Qdata?.A1,
                          A2: Qdata?.A2,
                          A3: Qdata?.A3,
                          A4: e.target.value,
                          A5: Qdata?.A5,
                          A6: Qdata?.A6,
                        });
                      }}
                    />
                    <Radio
                      style={{
                        marginRight: "5px",
                        marginLeft: "5px",
                        marginBottom: "8px",
                      }}
                      value="4"
                      color="green"
                    />
                  </div>
                ) : (
                  <></>
                )}
                {Anumber > 4 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                    }}
                  >
                    <LabelInput
                      value={Qdata?.A5}
                      label=""
                      placeholder="الأجابة الأولى"
                      onChange={(e: any) => {
                        setQdata({
                          A1: Qdata?.A1,
                          A2: Qdata?.A2,
                          A3: Qdata?.A3,
                          A4: Qdata?.A4,
                          A5: e.target.value,
                          A6: Qdata?.A6,
                        });
                      }}
                    />
                    <Radio
                      style={{
                        marginRight: "5px",
                        marginLeft: "5px",
                        marginBottom: "8px",
                      }}
                      value="5"
                      color="green"
                    />
                  </div>
                ) : (
                  <></>
                )}
                {Anumber > 5 ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                    }}
                  >
                    <LabelInput
                      value={Qdata?.A6}
                      label=""
                      placeholder="الأجابة الأولى"
                      onChange={(e: any) => {
                        setQdata({
                          A1: Qdata?.A1,
                          A2: Qdata?.A2,
                          A3: Qdata?.A3,
                          A4: Qdata?.A4,
                          A5: Qdata?.A5,
                          A6: e.target.value,
                        });
                      }}
                    />
                    <Radio
                      style={{
                        marginRight: "5px",
                        marginLeft: "5px",
                        marginBottom: "8px",
                      }}
                      value="6"
                      color="green"
                    />
                  </div>
                ) : (
                  <></>
                )}
                
              </AnswersBox>
            </Radio.Group>
            <Divider label="اظهار النتيجة" labelPosition="center" my="lg" />
            <div dir="ltr"><Checkbox
            style={{    justifyContent: "center"}}
              dir="ltr"
              label="اظهار النتيجة"
              color="yellow"
              size="md"
              onChange={(e: any) => {
                setShowAnswers(e.target.checked);
              }}
            /></div>
            <Divider label="" labelPosition="center" my="lg" />
            <form onSubmit={form.onSubmit(() => {})}>
              <Group style={{ justifyContent: "end" }} position="apart" mt="xl">
                {/* <Anchor
              component="button"
              type="button"
              color="dimmed"
              // onClick={}
              size="xs"
            ></Anchor> */}
                <Button
                  onClick={() => {
                    navigate("/home_page");
                  }}
                  color="gray"
                >
                  رجوع
                </Button>
                <Button
                  type="submit"
                  onClick={() => {
                    console.log("Duration", Duration);
                    Title === "" ? setIsTitle(false) : setIsTitle(true);
                    Question === ""
                      ? setIsQuestion(false)
                      : setIsQuestion(true);
                    Duration <= 0
                      ? setIsDuration(false)
                      : Duration > 100031
                      ? setIsDuration(false)
                      : !Duration
                      ? setIsDuration(false)
                      : setIsDuration(true);
                    // Duration > 10000 ? setIsDuration(false) : setIsDuration(true);
                    TrueAnswer <= 0
                      ? setIsTrueAnswer(false)
                      : TrueAnswer > Anumber
                      ? setIsTrueAnswer(false)
                      : !TrueAnswer
                      ? setIsTrueAnswer(false)
                      : setIsTrueAnswer(true);

                    if (Anumber == 2) {
                      if (Qdata.A1 && Qdata.A2) {
                        setIsAnswer(true);
                        if (
                          Title &&
                          Question &&
                          Duration > 0 &&
                          TrueAnswer > 0 &&
                          TrueAnswer <= Anumber 
                        ) {
                          fetch(
                            `https://gql.ajb.app/api/rest/addQ?title=${Title}&question=${Question}&username=${userInfo.userName}&duration=${Duration}&trueAnswer=${TrueAnswer}&showAnswers=${showAnswers}&answer1=${Qdata.A1}&answer2=${Qdata.A2}`
                          )
                            .then((res) => res.json())
                            .then((result) => {
                              navigate(
                                `/get_link/${result.insert_QA.returning[0].id}`
                              );
                            });
                        }
                      } else {
                        setIsAnswer(false);
                      }
                    }
                    if (Anumber == 3) {
                      if (Qdata.A1 && Qdata.A2 && Qdata.A3) {
                        setIsAnswer(true);
                        if (
                          Title &&
                          Question &&
                          Duration > 0 &&
                          TrueAnswer > 0 &&
                          TrueAnswer <= Anumber 
                        ) {
                          fetch(
                            `https://gql.ajb.app/api/rest/addQ?title=${Title}&question=${Question}&username=${userInfo.userName}&duration=${Duration}&trueAnswer=${TrueAnswer}&showAnswers=${showAnswers}&answer1=${Qdata.A1}&answer2=${Qdata.A2}&answer3=${Qdata.A3}`
                          )
                            .then((res) => res.json())
                            .then((result) => {
                              navigate(
                                `/get_link/${result.insert_QA.returning[0].id}`
                              );
                            });
                        }
                      } else {
                        setIsAnswer(false);
                      }
                    }
                    if (Anumber == 4) {
                      if (Qdata.A1 && Qdata.A2 && Qdata.A3 && Qdata.A4) {
                        setIsAnswer(true);
                        if (
                          Title &&
                          Question &&
                          Duration > 0 &&
                          TrueAnswer > 0 &&
                          TrueAnswer <= Anumber 
                        ) {
                          fetch(
                            `https://gql.ajb.app/api/rest/addQ?title=${Title}&question=${Question}&username=${userInfo.userName}&duration=${Duration}&trueAnswer=${TrueAnswer}&showAnswers=${showAnswers}&answer1=${Qdata.A1}&answer2=${Qdata.A2}&answer3=${Qdata.A3}&answer4=${Qdata.A4}`
                          )
                            .then((res) => res.json())
                            .then((result) => {
                              navigate(
                                `/get_link/${result.insert_QA.returning[0].id}`
                              );
                            });
                        }
                      } else {
                        setIsAnswer(false);
                      }
                    }
                    if (Anumber == 5) {
                      if (
                        Qdata.A1 &&
                        Qdata.A2 &&
                        Qdata.A3 &&
                        Qdata.A4 &&
                        Qdata.A5
                      ) {
                        setIsAnswer(true);
                        if (
                          Title &&
                          Question &&
                          Duration > 0 &&
                          TrueAnswer > 0 &&
                          TrueAnswer <= Anumber 
                        ) {
                          fetch(
                            `https://gql.ajb.app/api/rest/addQ?title=${Title}&question=${Question}&username=${userInfo.userName}&duration=${Duration}&trueAnswer=${TrueAnswer}&showAnswers=${showAnswers}&answer1=${Qdata.A1}&answer2=${Qdata.A2}&answer3=${Qdata.A3}&answer4=${Qdata.A4}&answer5=${Qdata.A5}`
                          )
                            .then((res) => res.json())
                            .then((result) => {
                              navigate(
                                `/get_link/${result.insert_QA.returning[0].id}`
                              );
                            });
                        }
                      } else {
                        setIsAnswer(false);
                      }
                    }
                    if (Anumber == 6) {
                      if (
                        Qdata.A1 &&
                        Qdata.A2 &&
                        Qdata.A3 &&
                        Qdata.A4 &&
                        Qdata.A5 &&
                        Qdata.A6
                      ) {
                        setIsAnswer(true);
                        if (
                          Title &&
                          Question &&
                          Duration > 0 &&
                          TrueAnswer > 0 &&
                          TrueAnswer <= Anumber 
                        ) {
                          fetch(
                            `https://gql.ajb.app/api/rest/addQ?title=${Title}&question=${Question}&username=${userInfo.userName}&duration=${Duration}&trueAnswer=${TrueAnswer}&showAnswers=${showAnswers}&answer1=${Qdata.A1}&answer2=${Qdata.A2}&answer3=${Qdata.A3}&answer4=${Qdata.A4}&answer5=${Qdata.A5}&answer6=${Qdata.A6}`
                          )
                            .then((res) => res.json())
                            .then((result) => {
                              navigate(
                                `/get_link/${result.insert_QA.returning[0].id}`
                              );
                            });
                        }
                      } else {
                        setIsAnswer(false);
                      }
                    }
                  }}
                >
                  انشاء
                </Button>
              </Group>
            </form>
          </BoxA>
        </PaperStyled>
      ) : (
        "please login"
      )}
    </>
  );
}
const PaperStyled = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 601px) {
    flex-direction: column;
  }
`;

const BoxA = styled(Paper)`
    margin: 30px 50px 0px 0px;
      @media (max-width: 601px) {
    margin: 0px;
  }
`;

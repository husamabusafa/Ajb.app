import { createStyles, Container, Text, Button, Group } from "@mantine/core";
import { GithubIcon } from "@mantine/ds";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";
import { WepContext } from "../context";

export function LearnMore() {
  const navigate = useNavigate();
  const [isTranslate, setIsTranslate] = useState(false);
  return (
    <Body>
      <Helmet>
        <title>learn more aboute site</title>
      </Helmet>
      <img
        src="../../public/logo.svg"
        style={{
          height: "100px",
          width: "100px",
          background: "#313131",
          borderRadius: "1000px",
          margin: "40px 0px 0px 0px",
        }}
      />
       <Button
      onClick={() => {isTranslate?setIsTranslate(false):setIsTranslate(true)}}
        style={{ margin: "10px",    minHeight: "40px" }}
        color="violet"
        radius="lg"
        size="xl"
        compact
      >
        {isTranslate ? "English" : "عربي"}
      </Button>
      <div
        style={{
          margin: "40px 10px 5px 10px",
          textAlign: "center",
          maxWidth: "600px",
          fontSize: "26px",
        }}
      >
        {isTranslate?"كيف تصنع السؤال":"how to build question"}
      </div>
     {isTranslate? <div
        style={{
          margin: "0px 10px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
               أولاً اكتب عنوان السؤال والسؤال ، ثم حدد عدد الدقائق لتحديد مدة السؤال ، ثم حدد رقم الإجابة الصحيحة وعدد الأسئلة ، واكتب الإجابات ، واختر ما إذا كنت تريد ان يتم عرض النتيجة على المجيب أم لا 
       
      </div>: <div
        style={{
          margin: "0px 10px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
                First write the question title and the question, then select the number of minutes to specify the duration of the question, then select the correct answer number and the number of questions, write the answers, and choose whether to display the result to the respondent. 
       
      </div>}
      <div
        style={{
          margin: "40px 10px 5px 10px",
          textAlign: "center",
          maxWidth: "600px",
          fontSize: "26px",
        }}
      >
      {isTranslate?"كيفية عرض الإجابات":" how to view the answers"}
       
      </div>
      {isTranslate?<div
        style={{
          margin: "0px 10px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
 انتقل على "أسئلتك" للاطلاع على أسئلتك التي قمت بإنشائها من
قبل، وانقر على السؤال لمعرفة من أجاب على السؤال ،
سواء أجاب بشكل صحيح أم لا و ما هي إجابته و
النسبة المئوية لمن أجابوا بشكل صحيح وكم تبقى على نهاية السؤال   

       

      </div>:<div
        style={{
          margin: "0px 10px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
     Go to "Your Questions" to see your questions that you have created
before, and click on the question to see who answered the question,
whether he answered correctly or not, what his answer was and the
percentage of those who answered correctly How much is left is the
question
 Go to "Your Questions" to see your questions that you have created
before, and click on the question to see who answered the question,
whether he answered correctly or not, what his answer was and the
percentage of those who answered correctly and How much is left at the end of the question
       

      </div>}
      
     {isTranslate?<div
        style={{
          margin: "40px 10px 5px 10px",
          textAlign: "center",
          maxWidth: "600px",
          fontSize: "14px",
        }}
      >
        مطور هذا الموقع<Name> حسام ابوصفا</Name>
      </div>: <div
        style={{
          margin: "40px 10px 5px 10px",
          textAlign: "center",
          maxWidth: "600px",
          fontSize: "14px",
        }}
      >
        The developer of this site is<Name> Husam Abusafa</Name>
      </div>}

     
      <Button
        style={{   marginBottom: "10px",  minHeight: "36px" }}
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

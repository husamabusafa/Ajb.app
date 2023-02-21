import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import styled from "styled-components";
import { NavbarMinimal } from "./comps/navBar";
import {
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page";
import { WepContext } from "./context";
import { LoginPage } from "./pages/loginPage";
import { ChangeAcount } from "./pages/change_acount";
import { CreateAcount } from "./pages/create_acount";
import PublicPage from "./pages/public_page";
import Qbuilder from "./pages/Qbuilder";
import { QuestionView } from "./pages/question_view";
import { FinishPage } from "./pages/finish_page";
import YoureQ from "./pages/your_q";
import DashBoard from "./pages/dash_board";
import GetLink from "./pages/get_link";
import { LearnMore } from "./pages/learn_more";
import Splash from "./pages/splash";
import MainLayout from "./MainLayout";
import rtlPlugin from "stylis-plugin-rtl";
const rtlCache: any = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});
function setLocalStorage(key: any, value: any) {
 
  console.log("setLocalStorage", key, value);
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

function getLocalStorage(key: any, initialValue: any) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

function App() {
  const [userInfo, setUserInfo] = useState(() =>
    getLocalStorage("userInfo", null)
  );
  useEffect(() => {
    setLocalStorage("userInfo", userInfo);
  }, [userInfo]);

  const [Qdata, setQdata] = useState(() => getLocalStorage("Qdata", null));
  useEffect(() => {
    setLocalStorage("Qdata", Qdata);
  }, [Qdata]);
  return (
    <APP dir="rtl">
      <WepContext.Provider
        value={{
          userInfo,
          setUserInfo,
          Qdata,
          setQdata,
        }}
      >
        <MantineProvider
          emotionCache={rtlCache}
          theme={{ dir: "rtl", colorScheme: "dark", fontFamily: "Marhey" }}
          withGlobalStyles
          withNormalizeCSS
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Splash />}></Route>
                <Route path="/home_page" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/change_acount" element={<ChangeAcount />}></Route>
                <Route path="/create_acount" element={<CreateAcount />}></Route>
                <Route path="/public_page/:id" element={<PublicPage />}></Route>
                <Route path="/question_builder" element={<Qbuilder />}></Route>
                <Route path="/question_view" element={<HomePage />}></Route>
                <Route
                  path="/question_view/:id"
                  element={<QuestionView />}
                ></Route>
                <Route
                  path="/question_view/finish/:id/:Anum"
                  element={<FinishPage />}
                ></Route>
                <Route path="/your_questions" element={<YoureQ />}></Route>
                <Route
                  path="/your_questions/dash_board/:id"
                  element={<DashBoard />}
                ></Route>
                <Route path="/get_link/:id" element={<GetLink />}></Route>
                <Route path="/learn_more" element={<LearnMore />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </MantineProvider>
      </WepContext.Provider>
    </APP>
  );
}
const APP = styled.div`
  font-family: "Marhey", cursive;
`;
export default App;

import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      {/* <div style={{ width: "20px", minHeight: "100px" }} /> */}
    </div>
  );
};

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
export default MainLayout;

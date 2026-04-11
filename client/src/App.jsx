import { BrowserRouter, Route, Routes } from "react-router-dom";
// BrowserRouter: URL 변화 감지
// Routes: Route 묶는 그룹, 현재 URL과 맞는 Route 찾아서 보여 줌
// Route: URL과 컴포넌트 연결

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import Result from "./pages/Result";

import "./assets/css/common.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <Header />
          <div id="cBody">
            <div className="cont">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<UserInfo />} />
                <Route path="/result" element={<Result />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

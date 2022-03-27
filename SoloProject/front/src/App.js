import {Routes, Route } from "react-router-dom"
import './App.scss';

import Main from "./page/main/Main.js"
import Topnavber from './navbar/TopNavbar.js';
import Bottomnavbar from './navbar/BottomNavbar.js';
// 프로젝트
import VueProject from "./page/project/Vue/VueMain.js"
import ReactProject from "./page/project/React/ReactMain.js";
// 자기소개서
import Introduce from "./page/selfIntroduction/Introduce.js";
// 대외활동
import Ambassador from "./page/activity/ambassador/AmbassadorMain.js";
import EducationalDonation from "./page/activity/educationalDonation/EducationalDonation.js";
import MajorDonation from "./page/activity/majorDonation/MajorDonation.js";
import ActivityVideo from "./page/activity/video/ActivityVideo.js";
// 회원가입
import Register from "./page/register/register.js";
// 로그인
import Login from "./page/login/login.js"
// 질문 게시판
import Question from "./page/question/Question.js";
import QuestionList from "./page/question/QuestionList.js";
import WritePage from "./page/question/WritePage.js"
// 새로운 기술 적용 하는 곳
import Newskill from "./page/newSkill/NewSkill.js";

const App = () => {
  return (
    <div id='All'>
    <Topnavber />
      <Routes>
        <Route index element={<Main />} />
        {/* 회원가입 */}
        <Route path="/register" element={<Register />} />
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        {/* 프로젝트 */}
        <Route path="/Vue" element={<VueProject />} />
        <Route path="/React" element={<ReactProject />} />
        {/* 자기소개서 */}
        <Route path="/introduce" element={<Introduce />} />
        {/* 대외활동 */}
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/educationalDonation" element={<EducationalDonation />} />
        <Route path="/majorDonation" element={<MajorDonation />} />
        <Route path="/activityVideo" element={<ActivityVideo />} />
        {/* 질문 게시판 */}
        <Route path="/Question" element={<Question />} />
        <Route path="/QuestionList" element={<QuestionList />} />
        <Route path="/WritePage" element={<WritePage />} />
        {/* 새로운 기술 적용하는 곳 */}
        <Route path="/Newskill" element={<Newskill />} />
      </Routes>
      <Bottomnavbar />
    </div>
  );
};

export default App;
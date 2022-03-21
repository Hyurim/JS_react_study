import {Routes, Route } from "react-router-dom"
import Topnavber from './topnavbar/TopNavbar.js';
import Main from "./page/main/Main.js"
import VueProject from "./page/project/Vue/VueProject.js"
import ReactProject from "./page/project/React/ReactProject.js";
import Introduce from "./page/selfIntroduction/Introduce.js";
import Ambassador from "./page/activity/ambassador/Ambassador.js";
import EducationalDonation from "./page/activity/educationalDonation/EducationalDonation.js";
import MajorDonation from "./page/activity/majorDonation/MajorDonation.js";
import ActivityVideo from "./page/activity/video/ActivityVideo.js";

const App = () => {
  return (
    <div>
    <Topnavber />
      <Routes>
        <Route index element={<Main />} />
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
      </Routes>
    </div>
  );
};

export default App;
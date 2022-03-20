import {Routes, Route } from "react-router-dom"
import Topnavber from './topnavbar/TopNavbar.js';
import Main from "./page/main/Main.js"
import VueProject from "./page/project/VueProject.js"
import ReactProject from "./page/project/ReactProject.js";
import Introduce from "./page/selfIntroduction/Introduce.js";

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
      </Routes>
    </div>
  );
};

export default App;
import {Routes, Route } from "react-router-dom"
import Main from "./page/main/Main.js"

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Main />} />

      </Routes>
    </div>
  );
};

export default App;
import { HashRouter, Route, Routes } from "react-router-dom";
import EnterDream from "./pages/dream/EnterDream";
import Analysis from "./pages/analysis/Analysis";
import Home from "./pages/home/Home";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterdream" element={<EnterDream />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;

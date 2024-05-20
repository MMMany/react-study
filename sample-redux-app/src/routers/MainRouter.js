import { Routes, Route } from "react-router-dom";
// import {
//   HomePage,
//   TestAgentList,
//   HdmiTestRequest,
//   HdmiTestResults,
//   PageNotFound,
// } from "../pages";
import HomePage from "../pages/HomePage";
import TestAgentList from "../pages/TestAgentList";
import HdmiTestRequest from "../pages/HdmiTestRequest";
import HdmiTestResults from "../pages/HdmiTestResults";
import PageNotFound from "../pages/PageNotFound";

export default function MainRouter(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/agent">
        <Route path="list" element={<TestAgentList />} />
      </Route>
      <Route path="/hdmitest">
        <Route path="request" element={<HdmiTestRequest />} />
        <Route path="results" element={<HdmiTestResults />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

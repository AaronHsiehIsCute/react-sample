import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/App" component={App}></Route>
    </Routes>
  </Router>
);

export default AppRouter;

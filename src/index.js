import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import { AuthProvider, useAuth } from "./pages/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWrapper = () => {
  const { isLoggedIn } = useAuth(); // 在组件内部使用 useAuth

  return isLoggedIn ? <App /> : <Navigate to="LoginForm" />;
};

root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/LoginForm" element={<LoginForm />} />
        {/* <Route path="/" element={<AppWrapper />} /> */}
        <Route path="*" element={<AppWrapper />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

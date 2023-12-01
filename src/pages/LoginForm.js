import React, { useState } from "react";
import { useNavigate, Navigate, redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const [error] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // try {
    //   // 发送登录请求至后端
    //   // 这里使用一个假设的登录接口，实际上应该连接到真实的后端
    //   const response = await fetch("https://example.com/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   const data = await response.json();

    //   // 根据后端响应处理登录结果
    //   if (response.ok) {
    //     setLoggedIn(true);
    //     setError("");
    //   } else {
    //     setLoggedIn(false);
    //     setError(data.message || "登录失败");
    //   }
    // } catch (error) {
    //   console.error("登录失败:", error);
    //   setLoggedIn(false);
    //   setError("登录失败");
    // }

    try {
      // 使用硬编码的用户名和密码
      const hardcodedCredentials = {
        username: "1111",
        password: "1111",
      };

      // 检查用户提供的凭据是否匹配硬编码的凭据
      if (
        username === hardcodedCredentials.username &&
        password === hardcodedCredentials.password
      ) {
        login(); // 更新登录状态
        navigate("/"); // 导航到首页
      } else {
        console.log("用户名或密码不正确");
      }
    } catch (error) {
      console.error("登录失败:", error);
      console.log(error);
    }
  };

  return (
    <div className="loginContainer">
      {isLoggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <div>
          <div className="loginBox">
            <label>
              账号:
              <input
                className="accountInput"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  console.log(username);
                }}
              />
            </label>
            <br />
            <label>
              密码:
              <input
                className="passwordInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;

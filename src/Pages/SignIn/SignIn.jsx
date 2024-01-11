import React, { useState, useEffect } from "react";
import "./SignIn.css";

import Header from "../../Components/Header/Header.jsx";
import Logo from "../../IMG/Logo.png";
import Button from "../../Components/UI/Button/Button.jsx";
import Input from "../../Components/UI/Input/Input.jsx";
import { Link } from "react-router-dom";
import { customAxios } from "../../Axios/AuthAxios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const history = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      history("/");
    }
  });

  const onSubmit = async () => {
    if (userId === "" || password === "") {
      alert("작성하지 않은 부분이 있습니다.");
      return;
    }
    await customAxios
      .post("/login/signin", {
        Id: userId,
        password: password,
      })
      .then((res) => {
        alert(res.data.message);
        history("/");
        localStorage.setItem("accessToken", res.data.accessToken);
      })
      .catch((res) => {
        alert(res.response.data.message);
      });
  };

  return (
    <div>
      <Header />

      <div className="SignIn_Container">
        <img src={Logo} alt="LogoIMG" className="Logo_Img" />
        <div className="SignIn_Text">Login</div>
        <div className="SignIn_Form">
          <div className="SignIn_Form_Input">
            <Input
              Type={"text"}
              PlaceHolder={"아이디"}
              onChangeMethod={(e) => {
                setUserId(e.target.value);
              }}
            />
            <Input
              Type={"password"}
              PlaceHolder={"비밀번호"}
              onChangeMethod={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="SignIn_Button_Form">
            <Button
              Text={"로그인"}
              onClickMethod={() => {
                onSubmit();
              }}
            />
          </div>

          <div className="SignIn_Login_Text">
            아이디가 없으신가요? <Link to={"/auth/signup"}>회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

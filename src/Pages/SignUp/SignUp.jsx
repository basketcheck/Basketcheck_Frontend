import React, { useState } from "react";
import "./SignUp.css";

import Header from "../../Components/Header/Header.jsx";
import Logo from "../../IMG/Logo.png";
import Button from "../../Components/UI/Button/Button.jsx";
import Input from "../../Components/UI/Input/Input.jsx";
import { Link } from "react-router-dom";
import { customAxios } from "../../Axios/AuthAxios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    if (userId === "" || name === "" || password === "") {
      alert("작성하지 않은 부분이 있습니다.");
      return;
    }
    await customAxios
      .post("/login/signup", {
        Id: userId,
        name: name,
        password: password,
      })
      .then((res) => {
        console.log(res.data.message);
        history("/auth/signin");
      })
      .catch((res) => {
        console.log(res);
        // window.location.reload();
      });
  };

  return (
    <div>
      <Header />

      <div className="SignUp_Container">
        <img src={Logo} alt="LogoIMG" className="Logo_Img" />
        <div className="SignUp_Text">SignUp</div>
        <div className="SignUp_Form">
          <div className="SignUp_Form_Input">
            <Input
              Type={"text"}
              PlaceHolder={"이름"}
              onChangeMethod={(e) => {
                setName(e.target.value);
              }}
            />
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

          <div className="SignUp_Button_Form">
            <Button
              Text={"회원가입"}
              onClickMethod={() => {
                onSubmit();
              }}
            />
          </div>

          <div className="SignUp_Login_Text">
            아이디가 있으신가요? <Link to={"/auth/signin"}>로그인</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

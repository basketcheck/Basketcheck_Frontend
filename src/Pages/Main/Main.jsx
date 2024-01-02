import React, { useState } from "react";
import "./Main.css";

import Header from "../../Components/Header/Header.jsx";
import Logo from "../../IMG/Logo.png";
import Vote from "../../IMG/Vote.png";
import Button from "../../Components/UI/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../Axios/AuthAxios";

const Main = () => {
  const today = new Date();
  const TodayDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;
  const history = useNavigate();
  const [isJoinned, setIsJoinned] = useState(false);

  const onSubmit = () => {
    if (localStorage.getItem("accessToken")) {
      customAxios
        .post("/team/join")
        .then((res) => {
          setIsJoinned((prev) => !prev);
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      alert("로그인 후 이용 가능합니다.");
      history("/auth/signin");
    }
  };

  return (
    <div>
      <Header />

      <div className="Main_Container">
        <div className="Main_Date">{TodayDate}</div>
        <img
          src={isJoinned ? Vote : Logo}
          alt="LogoIMG"
          className="Logo_Img"
          onClick={onSubmit}
        />
        <div className="Main_GoBasketBall">
          {isJoinned ? "취소하기" : "농구하러가기"}
        </div>

        <div className="Main_NowPeople">
          <Button
            Text={"현재 참가자"}
            onClickMethod={() => {
              history("/starting");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

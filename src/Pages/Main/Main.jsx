import React from "react";
import "./Main.css";

import Header from "../../Components/Header/Header.jsx";
import Logo from "../../IMG/Logo.png";
import Button from "../../Components/UI/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const today = new Date();
  const TodayDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

  const history = useNavigate();

  return (
    <div>
      <Header />

      <div className="Main_Container">
        <div className="Main_Date">{TodayDate}</div>
        <img
          src={Logo}
          alt="LogoIMG"
          className="Logo_Img"
          onClick={() => {
            if (localStorage.getItem("accessToken")) {
            }
          }}
        />
        <div
          className="Main_GoBasketBall"
          onClick={() => {
            if (localStorage.getItem("accessToken")) {
            }
          }}
        >
          농구하러 가기
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

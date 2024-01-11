import React, { useEffect, useState } from "react";
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
  const [isJoinned, setIsJoinned] = useState("");

  const onSubmit = () => {
    if (localStorage.getItem("accessToken")) {
      customAxios
        .post("/team/join")
        .then((res) => {
          alert(res.data.message);
          window.location.reload();
        })
        .catch((res) => {
          alert(res.data.message);
        });
    } else {
      alert("로그인 후 이용 가능합니다.");
      history("/auth/signin");
    }
  };

  useEffect(() => {
    const checkJoin = async () => {
      await customAxios
        .get("/team/join")
        .then((res) => {
          setIsJoinned(res.data.status);
        })
        .catch((res) => {
          alert("참여 상태를 확인할 수 없습니다.");
        });
    };
    checkJoin();
  }, []);

  return (
    <div>
      <Header />

      <div className="Main_Container">
        <div className="Main_Date">{TodayDate}</div>
        <img
          src={isJoinned === "True" ? Vote : Logo}
          alt="LogoIMG"
          className="Logo_Img"
          onClick={onSubmit}
        />
        <div className="Main_GoBasketBall">
          {isJoinned === "True" ? "취소하기" : "농구하러가기"}
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

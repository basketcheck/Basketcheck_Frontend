import React from "react";
import "./Header.css";
import Button from "../../Components/UI/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const history = useNavigate();
  return (
    <div className="Header_Container">
      <div
        className="Main_Text"
        onClick={() => {
          history("/");
        }}
      >
        BSSMBALL
      </div>
      {localStorage.getItem("accessToken") ? (
        <div className="Status_Login">
          <Button
            Text={"팀뽑기"}
            White={true}
            onClickMethod={() => {
              history("/draw");
            }}
          />
          <Button
            Text={"로그아웃"}
            onClickMethod={() => {
              localStorage.removeItem("accessToken");
              history("/");
              window.location.reload();
            }}
            White={true}
          />
        </div>
      ) : (
        <Button
          Text={"로그인"}
          White={true}
          onClickMethod={() => {
            history("/auth/signin");
          }}
        />
      )}
    </div>
  );
};

export default Index;

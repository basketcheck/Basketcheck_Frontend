import React, { useEffect, useState } from "react";
import "./Draw.css";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../Axios/AuthAxios";

import Header from "../../Components/Header/Header";
import Button from "../../Components/UI/Button/Button";

const Draw = () => {
  const history = useNavigate();
  const [shuffledMemberData, setShuffledMemberData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await customAxios.get("/team/shuffle");
      console.log(response.data.shuffledVotes);
      setShuffledMemberData(response.data.shuffledVotes);
      console.log(shuffledMemberData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Header />

      <div className="Draw_Container">
        <div className="Draw_Text">5 VS 5</div>

        <div className="Draw">
          <div className="Draw_Left">
            {shuffledMemberData.slice(0, 5).map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <div className="Draw_Right">
            {shuffledMemberData.slice(5, 10).map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </div>

        <div className="Draw_Buttons">
          <div className="Draw_ButtonDiv">
            <Button
              White={true}
              Text={"팀 뽑기"}
              onClickMethod={() => {
                fetchData();
              }}
            />
          </div>

          <div className="Draw_NowPeople">
            <Button
              Text={"현재 참가자"}
              onClickMethod={() => {
                history("/starting");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draw;

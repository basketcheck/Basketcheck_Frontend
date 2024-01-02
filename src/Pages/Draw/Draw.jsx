import React, { useEffect, useState } from "react";
import "./Draw.css";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../Axios/AuthAxios";

import Header from "../../Components/Header/Header";
import Button from "../../Components/UI/Button/Button";

const Draw = () => {
  const history = useNavigate();
  const [startingMemberData, setStartingMemberData] = useState([]);
  const startingMember = []

  // async 함수 안에서만 await을 사용할 수 있습니다.
  const fetchData = () => {
    customAxios
      .get("/team/shuffle")
      .then((res) => {
		console.log(res.data);
		// for (let i in res.data.team1) {
		// 	console.log(res.data.team1[i]);
		// 	startingMember.push({...res.data.team1[i]})
		// 	console.log(startingMember);
		// }
        // console.log(res.data.team1);
        // setStartingMemberData(res.data);
        // console.log(startingMemberData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // fetchData 함수를 호출하여 비동기로 데이터를 가져옵니다.
  fetchData();

  return (
    <div>
      <Header />

      <div className="Draw_Container">
        <div className="Draw_Text">5 VS 5</div>

        <div className="Draw">
          <div className="Draw_Left">
            {startingMember.team1.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
          <div className="Draw_Right">
            {/* {startingMemberData.team2.map((item) => (
              <div>{item.name}</div>
            ))} */}
          </div>
        </div>

        <div className="Draw_Buttons">
          <div className="Draw_ButtonDiv">
            <Button White={true} Text={"팀 뽑기"} />
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

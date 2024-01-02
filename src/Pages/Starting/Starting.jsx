import React, { useEffect, useState } from "react";
import "./Starting.css";
import Header from "../../Components/Header/Header.jsx";
import Button from "../../Components/UI/Button/Button.jsx";
import { customAxios } from "../../Axios/AuthAxios";
import { useNavigate } from "react-router-dom";

const Starting = () => {
  const history = useNavigate();
  const [startingMemberData, setStartingMemberData] = useState([]);

  useEffect(() => {
    // async 함수 안에서만 await을 사용할 수 있습니다.
    async function fetchData() {
      try {
        // 비동기 요청을 수행하고 응답을 기다립니다.
        const response = await customAxios.get("/team/starting");
        console.log(response.data.votes);
        // 응답 데이터를 변수에 할당하거나 원하는 작업을 수행합니다.
        setStartingMemberData(response.data.votes);

        // 여기에서 startingMemberData를 사용할 수 있습니다.
        console.log(startingMemberData);
      } catch (error) {
        // 에러가 발생한 경우 에러를 처리합니다.
        console.error("Error fetching data:", error);
      }
    }
    // fetchData 함수를 호출하여 비동기로 데이터를 가져옵니다.
    fetchData();
  }, []);

  return (
    <div>
      <Header />

      <div className="Starting_Container">
        <div className="Starting_Text">Starting</div>

        <div className="Starting_List">
          {startingMemberData.map((item, index) => (
            <>
              {(index + 1) % 2 == 1 ? (
                <div className="Starting_List_Main">
                  <div className="Starting_List_Num">{index + 1}</div>
                  <div className="Starting_List_Name">{item.name}</div>
                </div>
              ) : (
                <div className="Starting_List_Main Starting_List_Back_White">
                  <div className="Starting_List_Num">{index + 1}</div>
                  <div className="Starting_List_Name">{item.name}</div>
                </div>
              )}
            </>
          ))}
        </div>

        <div className="Starting_Buttons">
          <div className="Starting_ChangeMember">
            <Button
              Text={"교체 멤버"}
              White={true}
              onClickMethod={() => {
                history("/bench");
              }}
            />
          </div>
          <div className="Starting_Vote">
            <Button
              Text={"투표 하러 가기"}
              onClickMethod={() => {
                history("/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starting;

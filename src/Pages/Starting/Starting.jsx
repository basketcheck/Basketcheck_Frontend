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
    async function fetchData() {
      try {
        const response = await customAxios.get("/team/starting");
        setStartingMemberData(response.data.votes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

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

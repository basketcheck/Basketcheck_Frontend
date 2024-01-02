import React from "react";
import "./Bench.css";
import Header from "../../Components/Header/Header.jsx";
import Button from "../../Components/UI/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../Axios/AuthAxios";

const Bench = () => {
  const history = useNavigate();
  let BenchMemberData = [];
  // async 함수 안에서만 await을 사용할 수 있습니다.
  async function fetchData() {
    try {
      // 비동기 요청을 수행하고 응답을 기다립니다.
      const response = await customAxios.get("/team/starting");

      // 응답 데이터를 변수에 할당하거나 원하는 작업을 수행합니다.
      BenchMemberData = response.data;

      // 여기에서 BenchMemberData를 사용할 수 있습니다.
      console.log(BenchMemberData);
    } catch (error) {
      // 에러가 발생한 경우 에러를 처리합니다.
      console.error("Error fetching data:", error);
    }
  }
  // fetchData 함수를 호출하여 비동기로 데이터를 가져옵니다.
  fetchData();

  return (
    <div>
      <Header />

      <div className="Bench_Container">
        <div className="Bench_Text">Bench</div>

        <div className="Bench_List">
          {BenchMemberData.map((item) => (
            <>
              {item.id % 2 == 1 ? (
                <div className="Bench_List_Main">
                  <div className="Bench_List_Num">{item.id}</div>
                  <div className="Bench_List_Name">{item.name}</div>
                </div>
              ) : (
                <div className="Bench_List_Main Bench_List_Back_White">
                  <div className="Bench_List_Num">{item.id}</div>
                  <div className="Bench_List_Name">{item.name}</div>
                </div>
              )}
            </>
          ))}
        </div>

        <div className="Bench_Buttons">
          <div className="Bench_ChangeMember">
            <Button
              Text={"현재 멤버"}
              White={true}
              onClickMethod={() => {
                history("/starting");
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

export default Bench;

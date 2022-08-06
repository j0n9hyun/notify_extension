import "./static/scss/home.scss";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  const date = new Date();
  const year = time.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // // console.log(`date:${date.toLocaleDateString("ko-kr")}`);
  // // console.log(
  //   `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`
  // );
  return (
    <>
      <div className="home-wrapper">
        <div className="home-contents">{time.toLocaleTimeString()}</div>
      </div>
    </>
  );
}

export default App;

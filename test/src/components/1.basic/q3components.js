import { useEffect, useRef } from 'react';

function Q3components({ count, setCount }) {
  useEffect(() => {
    const Time = setInterval(() => {
      setCount((prev)=>prev+1);
    }, 1000);

    return () => {
      clearInterval(Time);
      setCount(0);
    };
  }, []);
  return (
    <>
      <p> 줄넘기 횟수 : {count} </p>
      <div> 🏃‍♂️ 줄넘기 ... ing </div>
    </>
  );
}
export default Q3components;

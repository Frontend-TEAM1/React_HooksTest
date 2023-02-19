import { useEffect, useRef } from "react";

function Q3components({count, setCount}) {
  let render;

  useEffect(() => {

    render = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log(count);
    }, 1000)
    
    return () => {
      clearInterval(render);
    setCount(0)
  }
  }, [])

  return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;

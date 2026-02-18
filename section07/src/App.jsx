import { useState, useEffect, useRef } from "react";

import "./App.css";
import Controller from "./components/Controller"
import Viewer from "./components/Viewer"
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 컴포넌트가 Mount가 되었는지 확인하는 객체 생성
  const isMount = useRef(false);

  // 1. 마운트: 탄생
  useEffect(()=>{
    console.log("mount");
  }, []) // 콜백함수는 컴퍼넌트가 처음 mount 될 때 이후부터 다시 실행 X

  // 2. 업데이트: 리렌더링
  useEffect(()=>{
    if(!isMount.current) { // 컴포넌트가 최초로 Mount 될 때 실행
      isMount.current = true;
      return;
    }
    console.log("update");
  }) // deps 생략 시 리렌더링 될 때 마다 콜백함수 호출

  // 3. 언마운트: 죽음


  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
         <input
	        value={input}
	        onChange={(e)=> {
		        setInput(e.target.value);
		        }}
		     />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App

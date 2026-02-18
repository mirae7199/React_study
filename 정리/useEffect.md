# useEffect

리액트 컴포넌트의 사이드 이펙트를 제어하는 새로운 React Hook

사이드 이펙트란<br> 
리액트에서는 “부수적인 효과”, “파생되는 효과”로 해석 가능하다.

즉, React 컴포넌트의 사이드 이펙트는 컴포넌트의 동작에 따라 파생되는 여러 효과를 의미한다.

```jsx
useEffect(() => {
  // 실행할 코드 (Side Effect)

  return () => {
    // 정리 코드 (Clean-up)
  };
}, [의존성 배열]); // -> deps
```

배열에 담긴 값이 변경이 될 때마다 콜백함수에서  실행할 코드를 호출한다.

App.jsx

```jsx
import { useState, useEffect } from "react";

import "./App.css";
import Controller from "./components/Controller"
import Viewer from "./components/Viewer"

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(`count: ${count}`)
  }, [count]) // count값이 변경되면 콜백함수 호출
// 의존성 배열
// dependency array
// deps 라고 부름.

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>  
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App

```

<img width="936" height="242" alt="image" src="https://github.com/user-attachments/assets/c14b2a4f-9820-4953-ad6c-505065338901" />

count 값이 변경될 때 마다 콜백함수가 호출되고 있음.

이번엔 입력 폼에 입력이 되었을 때, 값을 출력해보자.

```jsx
import { useState, useEffect } from "react";

import "./App.css";
import Controller from "./components/Controller"
import Viewer from "./components/Viewer"

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(""); // input 추가

  useEffect(()=>{
    console.log(`count: ${count} / input: ${input}`)
  }, [count, input]) // 추가

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
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App;
```

<img width="948" height="444" alt="image" src="https://github.com/user-attachments/assets/c2a28711-622a-4a34-af4b-bcd3591e5ad8" />

## useEffect로 생명 주기 제어하기

```jsx
// 1. 마운트: 탄생
useEffect(() => {
	console.log("mount");
}, []); // 콜백 함수는 컴포넌트가 처음 mount 될 때 이후부터 다시 실행 X
```

<img width="957" height="268" alt="image" src="https://github.com/user-attachments/assets/af9ceacd-fe96-42fd-9202-a291e7d501a9" />

```jsx
// 마운트가 된 것을 확인하기 위한 객체 생성
const isMount = useRef(false);

// 2. 업데이트: 리렌더링
useEffect(() => {
	if(!isMount.current) {
		isMount.current = true;
		return;
	}
	console.log("update");
}); // deps 생략 시 리렌더링 될 때 마다 콜백함수 호출
```

<img width="957" height="269" alt="image" src="https://github.com/user-attachments/assets/4986f721-700b-4947-870f-4d7026a3f33d" />

Even.jsx

```jsx
import { useEffect } from "react";

// 3. 언마운트: 죽음
const Even(() => {
	useEffect(() => {
		// 클린업, 정리 함수
		return () => { // useEffect가 끝날 때 실행. 
			console.log("unmount");
		};
	},[]); 

	return <div>짝수입니다.</div>
}
```

카운트가 짝수일 때 렌더링 하는 컴포넌트

<img width="957" height="265" alt="image" src="https://github.com/user-attachments/assets/e2b9b67d-dc02-470a-9765-090e58552e05" />
<img width="959" height="270" alt="image" src="https://github.com/user-attachments/assets/5ace67da-ccc7-4e8e-b80f-79f804ebb530" />
2 → 3으로 값이 변경될 때 Even.jsx 컴포넌트가 화면에서 사라짐. (unmount)

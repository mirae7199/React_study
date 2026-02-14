state 한국말로 상태를 뜻한다. 컴퓨터라는 사물이 있고 그 컴퓨터는 전원이 켜져있다. 여기서 상태값은 전원이 켜져있는 것을 말한다.

React 컴포넌트도 똑같이 state를 갖는다. 우리가 지금까지 작성해온 컴포넌트는 state가 없었다. 이번엔 state를 갖는 컴포넌트에 대해 알아보자.
state를 갖는 컴포넌트는 state의 값에 따라 렌더링 되는 UI가 결정된다. 예를 들어 state 값이 ON 값을 가지고 있고 컴퓨터가 전원이 켜져있는 모습을 렌더링한다. state 값이 ON → OFF 값으로 바뀌면 state 값이 바뀐 걸 감지해서 자동으로 이 컴포넌트를 다시 렌더링하여 컴퓨터가 전원이 꺼져있는 모습을 볼 수 있다.

> 참고로 이렇게 컴포넌트가 다시 렌더링 되는 상황을 Re-Render 또는 Re-Rendering 이라고 한다.
> 

state를 사용하려면 useState로 호출해야 한다.

App.jsx

```jsx
import { useState } from "react";

function App () {
	const state = useState();
	return <></>
}

export default App;
```

<img width="553" height="91" alt="image" src="https://github.com/user-attachments/assets/a56af7cd-aa40-4b0f-a7aa-e422c193dcbf" />

브라우저 개발자 모드에서 보면, 첫번째 요소는 undefined, 두번째 요소는 함수가 들어있다.
이 배열의 첫번째 요소로 useState()의 첫번째 인자로 들어간다. 첫번째 요소가 바로 state의 값이다.
두번째 요소는 함수인데 이 state 값을 변경시켜주는 함수가 들어있다. 이를 상태 변화 함수라고 부른다.

```jsx
function App() {
	const [count, setCount] = useState(0); // 초기값 0으로 설정
	console.log(count);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1); 
      }}
      >
        +
      </button>
    </>
		);
	}
```

<img width="482" height="316" alt="image" src="https://github.com/user-attachments/assets/6792b538-b6ae-46c8-a2e4-c79c417fecc1" />


\+ 버튼을 누르면 값이 1씩 증가한다.

컴퓨터 전원 상태를 추가해서 변경해보자!

```jsx
function App() {
	const [power, setPower] = useState("OFF"); // 초기값 OFF로 설정

	return (
		<>
			<h1>Computer</h1>
				<button onClick={ () => {
					setPower(power === "ON" ? "OFF" : "ON");
				}}
				>
					{power === "ON" ? "OFF" : "ON"}
				</button>
		</>
	)
```

<img width="479" height="104" alt="image" src="https://github.com/user-attachments/assets/72fe23c5-dad1-4355-b86a-7be697c9e458" />


이렇게 버튼을 누르면 컴퓨터 전원을 키고 끄는 상태 변화를 줄 수 있다.
이제 전구의 전원을 켰다가 끄고, count도 잴 수 있는 버튼을 만들어보자!

```jsx
import '/App.css';
import { useState } from 'react';

const Bulb = ()=> {
	const [light, setLight] = useState("OFF");
	console.log(light);
	return (
	<>
		<div>{light==="ON" ? <h1 style={{backgroundColor: orange}} "ON"</h1>
		 : 
				 <h1 style={{backgroundColor: gray}}"OFF"</h1>}</div>
		<div>
			<button onClick={ ()=> {
				setLight(light === "ON" ? "OFF" : "ON")
				}
			>
			{light === "ON" ? "OFF" : "ON"}
			</button>
		</div>
	</>
		);
	}
	
const Counter = ()=> {
	const [count, setCount] = useState(0);
	console.log(count);
	
	return (
	<div>
		<h1>{count}</h1>
		<button onClick={ ()=> {
			setCount(count + 1)
			}
		</button>
	</div>
		);
	}
	

function App() {
	return 
	<>
		<Bulb />
		<Counter />
	</>
}
```

<img width="1108" height="416" alt="image" src="https://github.com/user-attachments/assets/d5850f43-623e-4e66-affd-8856d1feb862" />


하지만 이렇게 작성하면 전구의 전원을 킬 때나 카운트를 올릴 때 모든 자식 컴포넌트가 리렌더링하는 것을 알 수 있다. 그렇게 되면 성능 저하가 일어날 수 있다. 그것을 방지하기 위해서 컴포넌트들을 따로 분리해서 독립적으로 작성해야 한다.

Bulb.jsx

```jsx
import { useState } from 'react';

const Bulb = ()=> {
	const [light, setLight] = useState("OFF");
	console.log(light);
	return (
	<>
		<div>{light==="ON" ? <h1 style={{backgroundColor: orange}} "ON"</h1>
		 : 
				 <h1 style={{backgroundColor: gray}}"OFF"</h1>}</div>
		<div>
			<button onClick={ ()=> {
				setLight(light === "ON" ? "OFF" : "ON")
				}
			>
			{light === "ON" ? "OFF" : "ON"}
			</button>
		</div>
	</>
		);
	}
	
export default Bulb;
```

Counter.jsx

```jsx
import { useState } from 'react';

const Counter = ()=> {
	const [count, setCount] = useState(0);
	console.log(count);
	
	return (
	<div>
		<h1>{count}</h1>
		<button onClick={ ()=> {
			setCount(count + 1)
			}
		</button>
	</div>
		);
	}
	
export default Counter;
```

이렇게 따로 작성하여 넣으면 다른 컴포넌트가 리렌더링 되지 않는 걸 알 수 있다.

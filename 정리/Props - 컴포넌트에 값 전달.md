컴포넌트에 전달된 값들을 props라고 부른다. properties의 줄임말로 생각하면 이해하기 쉽다.<br>
버튼 컴포넌트를 만들어 보자!

Button.jsx

```jsx
const Button = (props) => {
	const.log(props);
	return <button> 클릭 </button>;
};

export default Button;
```

App.jsx

```jsx
import './App.css';
import Button from './components/Button.jsx';

function App() {
	return (
		<>
			<Button text={"메일"} color={"red"}/><br/> // text, color 둘다 props
			<Button text={"카폐"}/><br/>
			<Button text={"블로그"}/>
		</>
	);
}

export default App;
```

각각의 버튼들은 text에 메일, 카폐, 블로그 props가 담겨있다.
버튼 컴포넌트에 전달되는 값을 props 라고 한다. 첫번째 버튼에는 text, color의 props 값이 있다.

<img width="1072" height="358" alt="image" src="https://github.com/user-attachments/assets/71a69f40-dca0-4f5a-959a-62f011813834" />


웹 브라우저에 개발자 모드에 들어가면 버튼들의 props 값들을 볼 수 있다.

버튼들의 텍스트들을 props 값을 받아서 렌더링 해보자.

Button.jsx

```jsx
const Button = (props) => {
	return <button style={{color: props.color}}>
	 {props.text} <button>
	};
	
	export default Button;
```

버튼들의 이름들이 text props 값들의 따라서 렌더링된다.

<img width="483" height="452" alt="image" src="https://github.com/user-attachments/assets/91600024-f795-4b70-8567-6260a68bb55f" />


props의 구조분해할당 문법<br>
props에 해당하는 값들을(text, color) 버튼 컴포넌트 인수에 풀어서 넣으면 된다.
color 값이 없는 button은 toUpperCase()에서 오류가 날 수 있기 때문에 기본값으로 “black”을 지정한다.

```jsx
const Button = ({text, color = "black"}) => {
	return <button style={{color:color}}>
		{text} - {color.toUpperCase()}
		</button>
	}
```

<img width="476" height="383" alt="image" src="https://github.com/user-attachments/assets/f614588d-cc06-4eff-a41b-2e896e991b9b" />


만약에 Button 에 많은 props가 전달되야 한다면 스프레드 연산자를 이용해서 buttonProps라는 객체 안에 모든 속성 값들을 다 props로 한방에 전달되도록 만들 수 있다.

```jsx
function App() {
	
	const buttonProps = {
		text: "메일",
		color: "red",
		a: 1,
		b: 2, 
		c: 3,
	};

	return (
	<>
		<Button {...buttonProps}/>
		<Button text={"메일"} color={"red"} a={1} b={2} c={3}/>
	</>
		);
	}
```

<Button text={"메일"} color={"red"} a={1} b={2} c={3}/> 처럼 전달할 props가 많다면 
객체에 값들을 할당해서 한번에 props 값들을 보낼 수 도 있다. 이것을 스프레드 연산자라고 한다.
props에는 일반적인 문자나 숫자 뿐만 아니라 HTML 요소도 보낼 수 있다. 코드로 확인해보자!

App.jsx

```jsx
function App() {
	return (
		<Button text={"블로그"}>
			<div>자식 요소</div>
		</Button>
	);
}
```

Button.jsx

```jsx
const Button = ({children, text, color = "black"}) => {
	return (
		{text} - {color.toUpperCase()}
		{children}
	);
}
```

이런식으로 \<div> 태그는 자식 요소로 배치되어 자식 컴포넌트에게 children이라는 이름으로 자동으로 전달된다.

## JSX 파일

```jsx
function App() {
 return ( 
	 <>
	   <h1>hello</h1>
	 <>
	)
}
```

자바스크립트 문법으로는 html를 코드에 포함시킬 수가 없다. 그래서 이 코드는 문법적으로 오류가 난다. 하지만 React.js 에서는 JSX 문법을 사용하므로 적법하다고 판단한다. 

JSX 란?<br>
JavaScript Extensions 
확장된 자바스크립트의 문법을 말한다. JSX을 사용하면 html과 자바스크립트를 혼용하여 사용할 수 있다.

**JSX: 확장된 자바스크립트 문법**

```jsx
function Footer() {
	const myName = "김미래";
	
	return (
		<footer>
			<h1>안녕 내 이름은 {myName}이야</h1>
			<h1>footer</h1>
		</footer>
	);
}
```

JSX 문법 덕분에 코드가 더 직관적이고, 동적으로 변수를 html에 전달하여 웹 페이지에 출력할 수 있다.

## JSX 주의사항

1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.

Main.jsx

```jsx
const Main = () => {
	const number = 10;
	return ( 
		<>
			<h1> {number} </h1>
			<h1> {if () {}} // if나 for문은 오류가 난다.
		</>
	);
}
```

if문 이나 for문은 중괄호 내부에 넣을 수 없다.

1. 숫자, 문자열, 배열 값만 렌더링 된다. 객체는 렌더링 되지 않는다.

```jsx
const Main = () => {
	const number = 10;
	const obj = { a : 10 };
	return ( 
		<>
			<h1> {number} </h1>
			<h2> {obj} </h2> // 오류
			<h2> {obj.a} </h2>
		</>
	);
}
```

중괄호에 객체를 넣을 시 오류가 난다. 객체의 속성을 가져올 땐 obj.a 로 사용할 수 있다.

1. 모든 태그는 닫혀있어야 한다.

```jsx

const Main = () => {
	const number = 10;
	
	return ( 
		<footer> // 오류
			<h1> {number} </h1>
			
		</>
	);
}
```

1. 최상위 태그는 반드시 하나여야만 한다.

```jsx

const Main = () => {
	const number = 10;

	return ( 
		<Main>
			<h1> {number} </h1>
		</Main>
	);
}
```

<Main> 같이 최상위 태그는 반드시 하나여야한다. 생략할 시(<></>) 

```jsx
const Main = () => {
	const user = {
		name: "김미래",
		isLogin: true,
		}
		
	return (
		<>
			{user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>)}
		</>
	);
}
```

```jsx
const Main = () => {
	const user = {
		name : "김미래",
		isLogin : true,
		};
	
	if (isLogin) {
		 return <div>로그아웃</div>;
	 } else {
	   return <div>로그인</div>;
	 }
	};
```

- 실행 결과
    
    로그아웃
    

## 돔 스타일 설정 방법

```jsx
const Main = () => {
	const user = {
		name : "김미래",
		isLogin : true,
		};
	
	if (isLogin) {
		 return <div style = {{
			 backGroundColor: "red",
			 borderBottom: "5px solid blue",
			 }}
		 >
		 로그아웃</div>;
	 } else {
	   return <div>로그인</div>;
	 }
	};
```

if 문에 직접 스타일 설정을 넣으면 가독성이 안좋아 질 수 있다.
별도의 css 파일을 만들어서 적용하는 방법도 있다.

```jsx
const Main = () => {
	const user = {
		name : "김미래",
		isLogin: true,
		};
		
	if (isLogin) {
		  return <div className="logout">로그아웃</div>
		} else
			return <div className="login">로그인</div>
		}
	};
```

Main.css

```css
.logout{
	background-color: red;
	border-bottom: 5px solid blue;
}

.login{
	backgoround-color: blue;
	border-bottom: 10px dashed red;
}
```

리액트 컴포넌트는 UI를 함수처럼 만든 것이다. 입력(props)을 받아서 화면(JSX)을 반환해준다.
html를 반환하는 자바스크립트 코드를 컴포넌트라고 부른다. 보통 컴포넌트의 이름은 함수의 이름을 따서 부른다. 

컴포넌트는 왜 쓸까?
화면을 모듈화해서 조각조각 나눠 레고처럼 조립할 수 있고, 같은 UI를 여러 번 재사용과 유지보수와 협업이 쉬워지기 때문에 많은 개발자들의 사랑을 받고 있다.

```jsx
function App() {
	return (
	<>
		 <h1> 안녕 리액트! </h1>
	<>
	);
}
```

이 코드는 App 컴포넌트 라고 부른다.

```jsx
function Header() {
	return (
		<header> 
		 <h1>header</h1>
		</header>
	);
}

const Header = () => {
	return (
		<header>
			<h1>header</h1>
		<header>
	);
}
```

참고로 이런식으로 변수에 함수를 넣어서 사용할 수 도 있다.

main.jsx 파일에 보면 

```
createRoot(document.getElementById('root')).render(
    <App />
)
```

App 컴포넌트가 등록되어 렌더링 되는 것이다. 
그래서 Header 컴포넌트를 만들어도 웹페이지에는 안뜨는 것이다. Header 태그를 추가해보자.

App.jsx

```jsx
function App() {
	return ( 
		<Header />
		<>
		  <h1> 안녕 리액트!</h1>
		<>
		);
	}
```

이제 저장을 하고 웹페이지를 보면 Header 컴포넌트에 작성한 텍스트가 보일 것이다.
이렇게 Header 컴포넌트 처럼 다른 컴포넌트에 리턴문에 포함되는 컴포넌트을 리엑트에서는 자식 컴포넌트라고 한다. 반대로 App 컴포넌트는 부모 컴포넌트라고 부른다.
App 컴포넌트 아래 자식 컴포넌트 Header, Main, Footer가 있을 때, 최상위 조상으로 갖는 계층 구조를 가지게 되는 것이고 그리고 이때 이런 모든 컴포넌트들의 조상 역할을 하는 이 App 컴포넌트를 Root 컴포넌트라고 한다.

그래서 main.jsx 파일에 App 컴포넌트가 아닌 다른 컴포넌트를 등록하여 넣을 수 도 있다.

```jsx
const Hello = () => {
	return <h1>hello!</h1>
}

createRoot(document.getElementById('root')).render(
	<Hello />
)
```

하지만 관례상 대부분의 개발자들은 App 컴포넌트를 인자로 넣기 때문에 변경해 주도록 하자.

보통 컴포넌트는 이렇게 하나의 파일에 여러 컴포넌트를 넣지 않고, 모듈화를 위해서 하나의 파일에 하나의 컴포넌트를 넣기 때문에 컴포넌트 별로 작성하는게 일반적이다.

components 폴더에 Header, Main, Footer .jsx 파일를 생성하고 App 컴포넌트에 태그를 넣어 웹페이지에 띄워보자.

```jsx
function App() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		<>
		);
	}
```

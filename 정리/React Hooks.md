## React Hooks

클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드을 말한다.

2017년도 이전의 React.js에서는 클래스 컴포넌트에서는 모든 기능(State, Ref, etc..)을 사용할 수 있었음. 하지만 함수 컴포넌트에서는 UI 렌더링만 할 수 있었다. 때문에 클래스 컴포넌트를 많이 사용했다. 단점이 문법이 복잡하다는 것이다. 그 이후에 함수 컴포넌트에서도 클래스 컴포넌트의 기능을 가져와서 사용할 수 있게(마치 낚아채듯이) 해주는 리액트 훅 이라는 기능이 개발되었다.

지금까지 우리가 사용하던 useState와 useRef는 모두 React Hooks 였다!

```jsx
const Register = ()=> {
	const [input, setInput] = useState({ // <- useState는 함수 컴포넌트에서만!
	name: "",
	birth: "",
	country: "",
	bio: "",
	});
```

## 3가지 hook 관련된 팁

1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능하다.

```jsx
import { useState } from "react";

const [input, setInput] = useState(""); // 오류

const HookExam = ()=> {

}

export default HookExam;
```

1. 조건부로 호출될 수는 없다.

```jsx
import { useState } from "react";

const HookExam = ()=> {

 if (true) {
    const state = useState(); // 오류
  }

}

export default HookExam;
```

1. 나만의 훅(Custom Hook)를 직접 만들 수 있다.

/hooks/useInput.jsx

```jsx
import { useState } from "react";

function useInput() { // 커스텀 훅으로 만들려면 use 라는 접두사를 붙이면 됨.
    const [input, setInput] = useState("");

    const onChange = (e)=> {
        setInput(e.target.value);
        console.log(input);
    };

    return [input, onChange];

}

export default useInput;
```

HookExam.jsx

```jsx
import useInput from "./../hooks/useInput";

 const HookExam = ()=> {

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();
    
    return (
    <div>
        <input value={input} onChange={onChange} />
        <input value={input2} onChange={onChange2} />
    </div>
    );
};

export default HookExam;
```

useRef는 새로운 Reference 객체를 생성하는 기능

```jsx
const refObject = useRef();
```

생성한 레퍼런스 객체는 컴포넌트 내부의 변수로써 일반적인 값들을 저장할 수가 있다. useState와 비슷한 면이 있지만, useState는 값이 변경되면 리렌더링을 하고 ***useRef는 어떤 경우에도 리렌더링을 유발하지 않는다.***

특정 DOM 요소에 접근하여 요소 조작이 가능하다.

```jsx
<div>
	<textarea
		ref={refObject} // 요소 조작 가능
		name="bio"
		value={input.bio}
		onChange={onchange}
	/>
</div>
```

## DOM(Document Object Model) 이란?

우리는 IDE 같은 곳에서 HTML 코드를 작성하면, 브라우저는 그 텍스트를 그대로 화면에 그리는 것이 아니다. 브라우저가 이 HTML 코드를 읽고 컴퓨터가 조작하기 쉬운 **트리(Tree) 구조**의 객체로 변환하는데 이것을 DOM 이라고 부른다.

- Document: 웹 페이지 그 자체
- Object: HTML의 요소(\<div>, \<h1>, \<button> 등)를 자바스크립트가 수정할 수 있는 객체로 만든 것
- Model: 이 객체들이 트리처럼 연결된 모델 구조

## 레퍼런스 객체 접근하기

Ref.jsx

```jsx
import { useState, useRef } from 'react'; // useRef 추가

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Ref = ()=> {
   const [input, setInput] = useState({
    name: "이름", 
    birth: "2001-07-19",
    country: "한국",
    bio: "안녕하세요",
   });

const refObj = useRef(); // 레퍼런스 객체
console.log(refObj);
```

전에 작성한 Register.jsx를 가져와서 정리하겠다.<br>
const refObj = useRef(); 이렇게 레퍼런스 객체를 생성할 수 있다.

<img width="527" height="129" alt="image" src="https://github.com/user-attachments/assets/6d611d96-48a7-42db-8c08-e43445f4071e" />


로그에 레퍼런스 객체를 찍으면 이런식으로 나오는 것을 확인할 수 있다.
레퍼런스 객체 값을 직접 접근하려면 .current를 사용하여 접근한다.

```jsx
import { useState, useRef } from 'react'; // useRef 추가

const refObj = useRef(0); // 레퍼런스 객체
console.log(refObj.current);
```

<img width="527" height="103" alt="image" src="https://github.com/user-attachments/assets/3120c3b4-e26a-4f46-aa56-0216a105702e" />


레퍼런스 객체 값을 증가하는 버튼을 만들어보자.

```jsx
import { useState, useRef } from 'react'; // useRef 추가

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Ref = ()=> {
   const [input, setInput] = useState({
    name: "이름", 
    birth: "2001-07-19",
    country: "한국",
    bio: "안녕하세요",
   });

const refObj = useRef(0); // 레퍼런스 객체
console.log("Ref 렌더링"); // 리렌더링 X

return (
	<div>
		<button
        onClick={()=> {
            refObj.current++;
            console.log(refObj.current);
        }}>
        ref + 1
        </button>
        
    <생략...>
    
   </div>
)
```

<img width="956" height="268" alt="image" src="https://github.com/user-attachments/assets/f0fa9582-e092-446d-900d-93cb064e3931" />


버튼을 클릭할때마다 로그가 출력되고, useState와 다르게 useRef 객체값은 리렌더링 되지 않는 것을 확인할 수 있다. (리렌더링이 된다면 레퍼런스 객체 생성 바로 다음줄 로그가 계속해서 출력해야 함.)

폼을 입력하여 사용자가 수정한 횟수를 세어보자.

```jsx
import { useState, useRef } from 'react'; // useRef 추가

const Ref = ()=> {
   const [input, setInput] = useState({
    name: "이름", 
    birth: "2001-07-19",
    country: "한국",
    bio: "안녕하세요",
   });

const countRef = useRef(0); // 레퍼런스 객체

const onChange = ()=> {
	countRef.current++;
	console.log(countRef.current);
	setInput({
		...input,
		[e.target.name]: e.target.value,
	});
};

	return (
    <div>
        <div>
            <input
            name="name"
            value={input.name}
            onChange={onChange} 
            placeholder={"이름"} /> 
            </div>
         <div>
            <input
            name="birth"
            value={input.birth}
            onChange={onChange}
            type="date" />  
        </div>
        <div>
            <select 
            name="country"
            value={input.country} 
            onChange={onChange}>
                <option></option>
                <option>한국</option>
                <option>미국</option>
                <option>영국</option>
            </select>
        </div>
        <div>
            <textarea
            name="bio"
            value={input.bio} 
            onChange={onChange}></textarea>
        </div>
    </div>
    )
}

export default Ref;
```

<img width="956" height="269" alt="image" src="https://github.com/user-attachments/assets/dcbab35e-264d-406e-86db-3aff7001d9cc" />


사용자가 폼을 수정할 때마다 카운터가 로그에 출력 되는 것을 확인할 수 있었다.

이번에 폼을 작성하여 제출 버튼을 눌러 제출하는 로직을 작성해보자.

```jsx
import { useState, useRef } from 'react'; // useRef 추가

const Ref = ()=> {
   const [input, setInput] = useState({
    name: "이름", 
    birth: "2001-07-19",
    country: "한국",
    bio: "안녕하세요",
   });

const countRef = useRef(0); // 레퍼런스 객체
const inputRef = useRef(); 

const onChange = ()=> {
	setInput({
		...input,
		[e.target.name]: e.target.value,
	});
};

const onSubmit = ()=> {
	if(input.name === "") {
        // 이름을 입력하는 DOM 요소 포커스
        inputRef.current.focus();
    }
};
	return (
		<div>
			<div>
				<input
				ref={inputRef} // DOM 요소를 객체에 저장
				name="name"
				value={input.name}
			onChange={onChange}
			placeholder={"이름"} />
			</div>
		
    <입력 폼 생략...>
    
        <button onClick={onSubmit}>제출</button>
    </div>
    )
}

export default Ref;
```

필수 입력인 name 폼을 입력을 안 했을 시에 발생하는 이벤트이다.

<img width="423" height="176" alt="image" src="https://github.com/user-attachments/assets/f06be86f-0038-4fec-b9c1-957b3bd070e3" />

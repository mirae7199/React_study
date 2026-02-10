State로 사용자 입력을 관리해보자.<br>
먼저 사용자 입력 폼을 따로 컴포넌트로 구현해보자.<br>
간단한 회원가입 폼을 만들기 위해서 이름, 생년월일, 국적, 자기소개를 입력으로 받자.

Register.jsx

```jsx
import {useState} from 'react';

const Register = ()=> {
	const [name, setName] = useState("이름");
	
	const onChangeName = (e)=> {
		console.log(e);
	}
	
	return (
		<div>
			<input onChange={onChangeName} placeholder={"이름"} />
		</dib>
	);
};
```

<img width="2550" height="1202" alt="image" src="https://github.com/user-attachments/assets/80bf6688-8659-48cb-972a-7fb89be74a29" />


브라우저 개발자 모드에서 log를 보면 사용자가 입력한 이름의 값을 볼 수 있다. 이벤트 객체를 인수로 갖는 익명함수를 onChangeName 이라는 객체에 할당하여 작성했다. 전에 이벤트 핸들링에 대해서 알아보았지만, 다시 한번 복습하는 시간을 갖자. 이벤트 객체 안에는 사용자가 입력한 값이 들어 있다. 값을 보려면 이벤트 객체에 target에서 value 값을 클릭하면 볼 수 있다. e.target.value로 접근하면 사용자의 입력값을 얻을 수 있다.

사용자가 폼을 통해 입력하여 이름 상태를 변경해보도록 하자.

Register.jsx

```jsx
const Register = ()=> {
	const [name, setName] = useState("이름");
	
	const onChangeName = (e)=> {
		setName(e.target.value);
		};
	
	return (
		<div>
			<input
			value={name}
			onChange={onChangeName} 
			placeholder={"이름"} />
			<br/>
			{name}
		</div>
	);
};

export default Register;
```

setName 함수를 통해서 사용자가 입력한 이름이 name 상태에 보관될 것이다.

<img width="1534" height="310" alt="image" src="https://github.com/user-attachments/assets/56899b9a-fce7-4b88-8361-e0642f2e5397" />


입력한 값이 name 상태를 변경하여 출력했다. 초기값을 설정하고 싶을 때, value={name} 속성을 사용하여 초기값을 설정할 수 있다.

나머지 입력 값들도 추가해보자!

Register.jsx

```jsx
const Register = ()=> {
	const [name, setName] = useState("이름");
	const [birth, setBirth] = useState("2001-07-19");
	const [country, setCountry] = useState("한국");
	const [bio, setBio] = useState("안녕하세요");
	
	const onChangeName = (e)=> {
		setName(e.target.value);
		};
	
	const onChangeBirth = (e)=> {
		setBirth(e.target.value);
		};
	
	const onChangeCountry = (e)=> {
		setCountry(e.target.value);
		};
	
	const onChangeBio = (e)=> {
		setBio(e.target.value);
		};
	
	return (
		<div>
			<div>
				<input
				value={name}
				onChange={onChangeName} 
				placeholder={"이름"} />
			</div>
			<div>
				<input
				value={birth}
				onChange={onChangeBirth}
				type="date" />
			</div>
			<div>
					<select 
            value={country} 
            onChange={onChangeCountry}>
                <option></option>
                <option>한국</option>
                <option>미국</option>
                <option>영국</option>
            </select>
			</div>
			<div>
				<textarea
            value={bio} 
            onChange={onChangeBio}>
        </textarea>
			</div>
		</div>
	
		
	);
};

export default Register;
```

<img width="1330" height="268" alt="image" src="https://github.com/user-attachments/assets/1f02b7d3-d030-4e52-b19c-0da111878ea4" />


사용자 입력 값에 따라 잘 바뀌는 것을 확인할 수 있다.
코드를 보면 비슷한 코드가 많은 것을 알 수 있는데 4개의 state(name, birth, country, bio)가 사실상 거의 같은 방식으로 계속 활용이 되고 있다. 이 4개의 state를 하나의 객체로 묶어서 표현하면 더 편하지 않을까?

```jsx
const Register = ()=> {
	const [input, setInput] = useState({
		name: "",
		birth: "",
		country: "",
		bio: "",
	});
	
	const onChangeName = (e)=> {
        setInput({
            ...input, // 관련없는 값들은 그대로 유지 (스프레드 연산자)
            name: e.target.value
        });
    }

    const onChangeBirth = (e)=> {
        setInput({
            ...input,
            birth: e.target.value});
    }

    const onChangeCountry = (e)=> {
        setInput({
            ...input,
            country: e.target.value});
    }

    const onChangeBio = (e)=> {
        setInput({
            ...input,
            Bio: e.target.value});
    }

    return (
    <div>
        <div>
            <input
            value={input.name}
            onChange={onChangeName} 
            placeholder={"이름"} /> 
            </div>
         <div>
            <input
            value={input.birth}
            onChange={onChangeBirth}
            type="date" />  
        </div>
        <div>
            <select 
            value={input.country} 
            onChange={onChangeCountry}>
                <option></option>
                <option>한국</option>
                <option>미국</option>
                <option>영국</option>
            </select>
        </div>
        <div>
            <textarea
            value={input.bio} 
            onChange={onChangeBio}></textarea>
        </div>
    </div>
    )
}

export default Register;
```

기존의 state들을 하나로 묶어 작성하였다. 초기 값에는 객체를 넣어 프로퍼티로 4개의 state를 보관한다.
onChange 함수에는 …input은 이미 입력된 값들은 그대로 유지하고 해당하는 프로퍼티만 값을 할당한다. (스프레드 연산자라고 함)<br>
…input 값을 안 넣을 시 해당하는 프로퍼티 값만 존재하고 다른 객체의 값들은 사라지게 된다. 객체들을 유지하려면 사용하도록 하자.

이벤트 핸들러 객체도 비슷한 코드가 생겼는데, 이것도 하나로 묶어서 작성해보자.

```jsx
const Register = ()=> {
	const [input, setInput] = useState({
		name: "",
		birth: "",
		country: "",
		bio: "",
	});
	
	const onChange = (e)=> {
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
            onChange={onChangeName} 
            placeholder={"이름"} /> 
            </div>
         <div>
            <input
            name="birth"
            value={input.birth}
            onChange={onChangeBirth}
            type="date" />  
        </div>
        <div>
            <select 
            name="country"
            value={input.country} 
            onChange={onChangeCountry}>
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
            onChange={onChangeBio}></textarea>
        </div>
    </div>
    )
}

export default Register;
```

<img width="888" height="292" alt="image" src="https://github.com/user-attachments/assets/15437116-621c-4c40-a603-064cc1e00223" />


코드가 급격하게 적어진 것을 확인할 수 있다. [e.target.name]: e.target.value는 각 input 태그에 프로퍼티로 name=”state 이름”을 작성하여 해당하는 객체에 값을 전달할 수 있다.

import { useState, useRef } from 'react';

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

   const countRef = useRef(0);
   const inputRef = useRef(); // 사용자 입력 DOM 접근

   const onChange = (e)=> {
        countRef.current++;
        console.log(countRef.current);
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
   }

    return (
    <div>
        <div>
            <input
            ref={inputRef} // DOM 요소가 이 객체에 저장.
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
    
    <button onClick={onSubmit}>제출</button>
    </div>
    )
}

export default Ref;
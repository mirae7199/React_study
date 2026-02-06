import { useState } from 'react';
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = ()=> {
   const [input, setInput] = useState({
    name: "이름", 
    birth: "2001-07-19",
    country: "한국",
    bio: "안녕하세요",
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

export default Register;
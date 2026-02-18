import { useEffect } from "react";

const Even = ()=> {
    useEffect(()=> {
        // 클린업, 정리함수
        return () => { // useEffect가 끝날 때 실행.
            console.log("unmount");
        }; 
    }, []);
    return <div>짝수입니다.</div>
}

export default Even;
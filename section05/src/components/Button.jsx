const Button = ({children, text, color = "black"}) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };
    return (
    <button 
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    );
};

// 구조분해할당 문법
// props에 해당하는 값들을 중괄호에 풀어서 인수에 넣기
// 기본값 설정: color = "black"

export default Button;
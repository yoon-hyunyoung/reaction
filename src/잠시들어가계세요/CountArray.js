import React from 'react';
export default function CountArray() {
    const [cnt, setCnt] = React.useState(0);
    const click = () => {
        setCnt(cnt + 1);
    }
    React.useEffect(() => {
        console.log("처음 만들어졌을때");
        return () => {
            console.log("컴포넌트 삭제시")
        }
    }, [])
    return (
        <div>
            {cnt} <button onClick={click}>버튼</button>
        </div>
    )
}
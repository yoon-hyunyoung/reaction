import React, {useReducer, useState} from 'react';
// prev 이전값, action 어떤 행동을 할지?
const reducer = (prev, action) => {
    if (action.type=="CHANGE"){  // 타입 체크까지하는 === 등호기호 3개!
        console.log(prev)
        return action.value;
    }
}

export default function Testreducer(){

    const [name, dispatch] = useReducer(reducer, "홍길동")
    const click = () => {
        dispatch({
            type: "CHANGE",
            value: "이몽룡"
        })
    }

return(
    
    <>
    {name}
    <button onClick={click}>변경</button>
    Testreducer

    </>
)

}

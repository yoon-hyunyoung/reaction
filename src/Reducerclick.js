import React, {useReducer, useState} from 'react';
// prev 이전값, action 어떤 행동을 할지?
const reducer = (prev, action) => {
    
    if (action.type=="CHANGE"){  // 타입 체크까지하는 === 등호기호 3개!
        console.log(prev)
        return action.value;
        
    }
};

export default function Reducerclick(){
    
    const [cnt, dispatch] = useReducer(reducer, 0);
    
    const click = () => {
        
            dispatch({
                type: "CHANGE",
                value: cnt+1
        })
    }
   
    

return(
    
    <>
    <span style={{fontSize:"50px"}}>버튼을 눌러 +1 하세요</span><br/>
    <span style={{margin:"100px"}}><span style={{fontSize:"30px"}}>{cnt}</span>
    <button style={{fontSize:"20px"}} onClick={click}>+1</button></span>
    

    </>
)

}

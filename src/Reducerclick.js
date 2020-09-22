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
    {cnt}
    <button onClick={click}>변경</button>
    

    </>
)

}

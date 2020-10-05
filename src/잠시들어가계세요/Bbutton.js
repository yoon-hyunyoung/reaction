import React, { useState } from 'react';
import {Button} from 'antd';

function Bbutton() {
    const [state, setState] = useState("choose")
//각각하는 방법
    // const change1 = () => {
    //     setState('바나나')
    // }
    // const change2 = () => {
    //     setState('사과')
    // }
    // const change3 = () => {
    //     setState('딸기')
    // }

    const change = (e) => {
        console.log(e.target.innerHTML)
        console.log(e.target.getAttribute('data'))
        console.log(e.target.getAttribute('name'))
        console.log(e.target.name)
        setState(e.target.innerHTML)
    }
    return (
    <>
        <div>{state}</div>
        <div>
            <Button name='바나나' data='바나나' onClick={change}>바나나</Button>
            <Button name='사과' data='사과' onClick={change}>사과</Button>
            <Button name='딸기' data='딸기' onClick={change}>딸기</Button>  
        </div>
    </>
    );
}

export default Bbutton;

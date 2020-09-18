import React, { useState } from 'react';
import Todolist_c from 'Todolist_c'
function Todolist_p()
{   const [cnt, setCnt] = useState(0) => {
    cnt += 1
    }
    const [text, texts] = useState('입력값') => {
        ????
    }

return (
    <>
        <div>todo list Component<br/>
            <input box></input>
            <button>추가</button>
            <Todolist_c
                countingnum = {cnt}
                inputdata = {???}
            />




            
        </div>
    </>
);
}
export default Todolist_p;

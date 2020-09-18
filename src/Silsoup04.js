import React, {useState} from 'react';


function Silsoup04() {
   // const state = true
    
    const [num, setNum] = React.useState(0);
    const [student, setStudent] = React.useState({name:'홍길동', math:80, science:30, english:60});
    const click = (event) => {
        console.log("클릭")
        setStudent({...student, math:0, science:0, english:0})
    }

    return (
        <div>
            {JSON.stringify(student)}
            <button onClick={click}>0으로 만들기</button>
            
        </div>
    )
};
export default Silsoup04;

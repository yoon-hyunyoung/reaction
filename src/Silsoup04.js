import React, {useState} from 'react';


function Silsoup04() {
   // const state = true
    
    
    const [num, setNum] = React.useState([1,2,3,4,5,6,7,8,9]);
    const click = (event) => {
        console.log("클릭")
        setNum([...num.slice(0, 4), 0, 0, ...num.slice(6, 10)])
        }

    return (
        <div>
            {JSON.stringify(num)}
            <button onClick={click}>5와 6을 0으로 바꾸기</button>
            
        </div>
    )
};

export default Silsoup04;

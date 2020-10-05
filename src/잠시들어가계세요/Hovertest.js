import React, { useState } from 'react';

function Hovertest() {
    const style = {
        width:'100px',
        height:'100px',
        fontSize:"20px",
        backgroundColor:'gray',
        textAlign:'center',
        lineHeight:'100px'
    }
    const [a, setA] = useState(0);
    
    const onmouseover = (event) => {
        setA(1)
    }
    const onmouseout = (event) => {
        setA(0)
    }

    return (
        <>
            <div style={style}
                onMouseOver={onmouseover} onMouseOut ={onmouseout}>{a}</div>
                

        </>
    )
}

export default Hovertest;
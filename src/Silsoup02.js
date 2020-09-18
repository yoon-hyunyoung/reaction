import React, {useState} from 'react';


function Silsoup02() {
   // const state = true
    const [state, setState] = useState(1);
    const click = (event) => {
        if (state == true){
            setState(false)
        }
        if (state == false){
            setState(true)
        }
    }

    return (
        <>
            {state ? <div>야</div> : <div>호.</div>}
            <button onClick={click}>버튼</button>
        </>
    )
    }
export default Silsoup02;

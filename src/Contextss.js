import React, { createContext, useState } from 'react';


const ClassContext = createContext("")


export default function Contextss(){
    const[name, setName] = useState('');
        
    return(
        <ClassContext.Provider value={name}>
        <>
        <div>
            과정명 <input type="text" onChange={e => setName(e.target.value)}/>{name}
        </div>
        <div>
            <Contextsss/>
        </div>
        </>
        </ClassContext.Provider>
    )
}

function Contextsss(){
    const[stu, setStu] = useState([])
    const[age, setAge] = useState({
        name: '',
        age:0
    });

    const change = (e) => {
        const {value, name} = e.target;
        setStu({})
    }

    return(
        <ClassContext.Consumer>
        <>
            학생이름 <input type="text" onChange={e => setStu(e.target.value)}/>{stu}
            <button>등록</button>
            나이  <input type="text" onChange={e => setAge(e.target.value)}/>{age}
            <button>등록</button>
        
        </>
        </ClassContext.Consumer>
    )
}


// function Contextssss(){


//     return(
//         <>
        
        
//         </>


//     )
// }

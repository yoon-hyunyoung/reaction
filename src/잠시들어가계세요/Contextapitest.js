// import React from 'react';

// export default function Contextapitest(){
//     const[cnt, setCnt] = React.useState(100);

//     return (
//         <>
//             {cnt}
//             <div>
//                 <Child1 cnt={cnt}/>
//             </div>

//         </>

//     )
// }

// function Child1({cnt}){
//     return (
//         <>
//         <div><Child2 cnt={cnt}/></div>
//         </>
//     )
// }
// function Child2({cnt}){
//     return (
//         <>
//         <div><Child3 cnt={cnt}/></div>
//         </>
//     )
// }

// function Child3({cnt}){
//     return (
//         <>
//         <div>{cnt}</div>
//         </>
//     )
// }


import React from 'react';
const CntContext = React.createContext(0);

const reducer = (prev, action) => {
    const {type, value} = action;
    if (type ==="CHANGE")
    return value;

}


export default function Contextapitest() {
    const [cnt, setCnt] = React.useState(100);

    const changeCnt =(number) => {
        setCnt(number)
    }

    return (
        <>
            {cnt}
            <div>
                <CntContext.Provider value={{cnt:cnt, changeCnt:changeCnt}}>
                    <Child1/>
                </CntContext.Provider>
            </div>
        </>
    )
}
function Child1(){
    return(
        <div>
            Child1
            <Child2/>
        </div>
    )
}
function Child2(){
    return(
        <div>
            Child2
            <Child3/>
        </div>
    )
}
function Child3(){

    const{cnt, changeCnt} = React.useContext(CntContext)
    const click = () => {
        changeCnt(10000)
    }
    return(

        <button onClick={click}>변경</button>
        // <CntContext.Consumer>
        // {
        //     (cnt) => (
        //         <>
        //             <div>부모에서 보낸 숫자는?</div>
        //             <div>{cnt}</div>
                   
        //         </>
        //     )
        // }
        // </CntContext.Consumer>
    )
}
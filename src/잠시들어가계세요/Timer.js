import React, {useState} from 'react';



export default function Timer() {

    const [timer, setTimer] = useState([]);
    const [cnt, setCnt] = useState(-1);
    const click = () =>{
        setTimer([...timer, new Date()])
        // console.log("클릭 들어옴")
        
    }

    React.useEffect(()=> {
        setCnt(cnt+1)
    },[timer])

    return (
        <>
             
            타이머개수 : {cnt}
            <button onClick={click}>stop</button>{
                timer.map((v)=> {
                    // return <div>{v.toISOString()}</div>
                    return <TimerTime startTime={v}/>
                }
                )
            }
        </>
    )
}

function TimerTime({startTime}) {
    
    const [timer, setTimer] = React.useState(0);

    React.useEffect(()=>{
        //컴포넌트가 생성될때 한번만
        const inter = setInterval(()=> {
            setTimer(new Date().getTime() - startTime.getTime())
        }, 1000)

        return () => {
            //컴포넌트 종료될때 실행
            clearInterval(inter)
        }
    },[])

    return (
        <div>
            {startTime.toISOString()} //이거슨// {parseInt(timer / 1000)} 초 지남//
        </div>
    )
}
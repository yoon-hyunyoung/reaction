import React, { useState, useEffect } from 'react';
import img1 from "C:/Users/ASIA_04/Desktop/todo_react/todo/src/1.png"
import img2 from "C:/Users/ASIA_04/Desktop/todo_react/todo/src/2.png"
import img3 from "C:/Users/ASIA_04/Desktop/todo_react/todo/src/3.png"

export default function RSP(){
    
    const[imgs, setImgs] = useState();
    const[user, setUser] = useState();
    const[ment, setMent] = useState("결과는??");
    const[com, setCom] = useState();
    const click = () => {
        const com = Math.floor(Math.random()*3)+1 //0, 1, 2
            
            setImgs(img1)
            setUser('가위')

        if (com==1){
            console.log("draw")
            setCom('가위')
            setMent('비겼습니다')
            setImgs(img1)
        }
        if (com==2){
            console.log("lose")
            setCom('바위')
            setMent('졌습니다')
            setImgs(img2)
        }
        if (com==3){
            console.log("win")
            setCom('보')
            setMent('이겼습니다')
            setImgs(img3)
        }
    }
    const click1 = () => {
        const com = Math.floor(Math.random()*3)+1 //0, 1, 2
            
            setUser('바위')
            setImgs(img2)
        
        if (com==1){
            console.log("win")
            setCom('가위')
            setMent('이겼습니다')
            setImgs(img1)
        }
        else if (com==2){
            console.log("draw")
            setCom('바위')
            setMent('비겼습니다')
            setImgs(img2)
        }
        else if (com==3){
            console.log("lose")
            setCom('보')
            setMent('졌습니다')
            setImgs(img3)
        }
    }
    const click2 = () => {
        const com = Math.floor(Math.random()*3)+1 //0, 1, 2
            
            setUser('보')
            setImgs(img3)
        
        if (com==1){
            console.log("lose")
            setCom('가위')
            setMent('졌습니다')
            setImgs(img1)
        }
        if (com==2){
            console.log("win")
            setCom('바위')
            setMent('이겼습니다')
            setImgs(img2)
        }
        if (com==3){
            console.log("draw")
            setCom('보')
            setMent('비겼습니다')
            setImgs(img3)
        }
    }
    const [cnt, setCnt] = useState(-1);
    useEffect(() => {
        setCnt(cnt+1)},[com],[user])
    
    return(
            <>
                 <div style={{wight:300,height:1000,backgroundColor:"ivory"}}>
                <p  style={{fontSize:70}}>셋 중 하나를 선택해 주세요.</p>
                <span style={{fontSize:50}}>{cnt}</span><span  style={{fontSize:30}}>회 진행</span>
                
                <p  style={{fontSize:50}}>com :<img src={imgs}/> {com} <br/>user :<img src={imgs}/> {user}</p>

                <div style={{overflow:0}}><img title='가위선택' src={img1} onClick={click}/>
                <img title='바위선택' src={img2} onClick={click1}/>
                <img title='보선택' src={img3} onClick={click2}/></div>
                <p style={{fontSize:50}}>{ment}</p>
                </div>

            </>

    )
};

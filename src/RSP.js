import React, { useState } from 'react';
import img1 from "C:/Users/ASIA_04/Desktop/todo_react/todo/src/1.png"
import img2 from "C:/Users/ASIA_04/Desktop/todo_react/todo/src/2.png"
import img3 from "C:/Users/ASIA_04/Desktop/todo_react/todo/src/3.png"

export default function RSP(){
    
    const [com, setCom] = useState(-1)

    const click = () => {
        const computer = Math.floor(Math.random()*3) //0, 1, 2
        setCom(computer)

        //setCom([com]) 
    }
    
        
        
        
        
        
        return(
            <>
                
                <img src={img1} onClick={click}/>
                <img src={img2} onClick={click}/>
                <img src={img3} onClick={click}/>



            </>

        )
};
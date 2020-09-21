import React, { useState } from 'react';

export default function TodoList(){

    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState("");
    // const ex = (e) => {
    //     setText(e.target.value)
    // }

    const click = () => {
        setTodoList([...todoList,text]);
        setText("");
    }
    const press = (e) => {
        console.log(e)
        if (e.key == 'enter'){
            click()
        }
    }
    const deleteTodo = (index) => {
        setTodoList([...todoList.slice(0, index), ...todoList.slice(index+1, todoList.length)])
    }

    return (
        <>
        <input value={text}
               onChange={(e)=>setText(e.target.value)}/>
        <button onClick={click}>추가</button>
        {
            todoList.map((v, i)=>{
                return <Todo i={i} v={v}
                deleteTodo={deleteTodo}/>
            })
        }
        
      
        </>
    )
}

function Todo({i, v, deleteTodo}){

    const click = (e) => {
        console.log(i)
        deleteTodo(i)
    }

    return (
    <div>
        {i} {v} <button onClick={click}>삭제</button>
    </div>
    )
}
import React, {useReducer, useState} from 'react';
import API from 'Api';
import queryString from 'query-string';
import { BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
export default function Router01(){
    const active ={
        borderBottom:"2px solid pink"
    }


    return(
        <BrowserRouter>
        <>
        <div id='menu'>
        <table><td>
        <th><NavLink exact to="/home" activeStyle={active}>홈</NavLink></th>
        <th><NavLink exact to="/student" activeStyle={active}>학생</NavLink></th>
        <th><NavLink exact to="/score" activeStyle={active}>점수</NavLink></th></td></table>
        
        </div>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/student" component={Student}/>
        <Route exact path="/score" component={Score}/>
        </>
        </BrowserRouter>
    )
}

function Home({history, location, match}){
    
    
    return(
        <>
        Home
        
        </>
    )
}
function Student({history, location, match}){
    const [students, setStudents] = React.useState([]);
   
    React.useEffect(()=>{
        API.get("study/students/")
        .then(res => {
            console.log(res);
            const { data } = res;
            setStudents(data);
        }).catch(error=>{
            console.log(error);
        })
    }, [])
    return(
        <div>
            {
                students.map((v)=>{
                    return <div id={v.id}><table style={{border:"3px solid pink", width:"100%"}}> 
                    <tr>
                        <td style={{border:"3px solid hotpink"}}>이름</td>
                        <td style={{border:"3px solid hotpink"}}>주소</td>
                        <td style={{border:"3px solid hotpink"}}>이메일</td>
                        <td style={{border:"3px solid hotpink"}}>메모</td>
                    </tr>
                        <tr style={{backgroundColor:"yellow"}}>
                    <td style={{border:"3px solid pink"}}>{v.name}</td>    
                    <td style={{border:"3px solid pink"}}>{v.address}</td>    
                    <td style={{border:"3px solid pink"}}>{v.email}</td>    
                    <td style={{border:"3px solid pink"}}>{v.memo}</td>    
                    </tr>
                    </table></div>
                })
            }            
        </div>
    )
}
function Score({history, location, match}){
    const [score, setScore] = React.useState([]);
   
    React.useEffect(()=>{
        API.get("study/scores/")
        .then(res => {
            console.log(res);
            const { data } = res;
            setScore(data);
        }).catch(error=>{
            console.log(error);
        })
    }, [])
    return(
        <div>
            {
                score.map((s)=>{
                    return <div id={s.id}><table style={{border:"3px solid pink"}}> 
                    <tr>
                        <td style={{border:"3px solid hotpink"}}>이름</td>
                        <td style={{border:"3px solid hotpink"}}>수학</td>
                        <td style={{border:"3px solid hotpink"}}>과학</td>
                        <td style={{border:"3px solid hotpink"}}>영어</td>
                    </tr>
                        <tr style={{backgroundColor:"yellow"}}>
                    <td style={{border:"3px solid pink"}}>{s.name}</td>    
                    <td style={{border:"3px solid pink"}}>{s.math}</td>    
                    <td style={{border:"3px solid pink"}}>{s.science}</td>    
                    <td style={{border:"3px solid pink"}}>{s.english}</td>    
                    </tr>
                    </table></div>
                })
            }            
        </div>
    )
}
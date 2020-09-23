import React, {useReducer, useState} from 'react';
import { BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
export default function Routertest(){
    const active ={
        color:'red'
    }
    
    return (
        <BrowserRouter>
        <div id='menu'>
            <NavLink to='/' activeStyle={active}>Home</NavLink><br/>
            <NavLink to="/students" activeStyle={active}>Students</NavLink>
        </div>
        <div id="content">
            <Switch> {/*Swich = 아래 3개 링크 중 가장 상단에 정확한  url만 나오도록 한다.  */}
            <Route exact path='/' component={Home}/>
            <Route path='/students' component={Students}/>
            <Route component={Nopage}/> 
            {/* Route = path가 없어 무조건 나오는데 잘못입력하면 뜨게하기 좋다.
            (exact놓으면 정확히 그 url로만 가기 때문에 동반 사용 가능)*/}
            </Switch>
        </div>
        </BrowserRouter>        
    )
}

function Nopage()
{
    return(
        <div>
            잘못 url 입력했을때 나옵니다
        </div>
    )
}

function Home()
{
    return(
        <div>
            HOME
        </div>
    )
}
function Students()
{
    return(
        <div>
            STUDENTS
        </div>
    )
}
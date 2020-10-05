import React, {useReducer, useState} from 'react';
import queryString from 'query-string';
import { BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'
export default function Routertest(){
    const active ={
        color:'red'
    }
    
    return (
        <BrowserRouter>
        <div id='menu'>
            <NavLink to='/home' activeStyle={active}>Home</NavLink><br/>
            
            <NavLink to="/students" activeStyle={active}>Students</NavLink>
        </div>
        <div id="content">
        <Layout>
            <Switch> {/*Swich = 아래 3개 링크 중 가장 상단에 정확한  url만 나오도록 한다.  */}
            
            <Route exact path='/home' component={Home}/>
            <Route path='/students/:id' component={Detail}/>
            <Route path='/students' component={Students}/>
            <Route component={Nopage}/> 
            {/* Route = path가 없어 무조건 나오는데 잘못입력하면 뜨게하기 좋다.
            (exact놓으면 정확히 그 url로만 가기 때문에 동반 사용 가능)*/}
            </Switch>
        </Layout>
        </div>
        </BrowserRouter>        
    )
}

function Nopage({history, location, match})
{  
    return(
        <div>
             url을 잘못 입력했을때 나옵니다
        </div>
    )
}

function Home({history, location, match})
{           
            const click1 = () => {
                history.push('/students')
            }
    return(
        <div>
            HOME<br/>
            <button onClick={click1}>go students history-push</button><br/>
        </div>
    )
}
function Students({history, location, match})
{   
    const click = () => {
        history.push('/home')
    }
    
    return(
        <div>
            STUDENTS<br/>
            <button onClick={click}>go Home history-push</button><br/>
            
            <a><Link to="/home">go home a-Link</Link></a>
        </div>
    )
}

function Detail({history, location, match}){
    console.dir(match);
    console.log(location.search);
    console.log(match.params);

    const qs = queryString.parse(location.search);
    console.dir(qs)

    return(
        <>
        {match.params.id}
        {qs.name}
        {qs.age}
        </>
    )
}

function Layout({children}){
    return(

        <>
        <div>디자인</div>
        {children}
        
        </>
    )
}

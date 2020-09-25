import React, {useReducer, useState} from 'react';
import 'antd/dist/antd.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined, HeartOutlined, ProfileOutlined } from '@ant-design/icons';
import API from 'Api';
import queryString from 'query-string';
import { BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import logo from 'assets/logo.JPG';
import { Menu } from 'antd';
import axios from 'axios';


const { SubMenu } = Menu;

export default function Yoon(){


    const [state, setState] = React.useState({current: '1'});
    const [state2, setState2] = React.useState({current2: 'sub1'});

        const handleClick = e => {
          console.log('click ', e)
        };
    
       
      return (
        <BrowserRouter>
       <>
       <Menu
        onClick={handleClick}
        style={{ width: "200px", float:"left" }}
        defaultSelectedKeys={[state.current]}
        defaultOpenKeys={[state2.current2]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <HeartOutlined />
              <span>리그구성</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="EPL/EFL/LEAGUE1">
            <Menu.Item key="1"><NavLink exact to="/epl">EPL</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink exact to="/efl">EFL</NavLink></Menu.Item>
            <Menu.Item key="9"><NavLink exact to="/league1">LEAGUE1</NavLink></Menu.Item>
          </Menu.ItemGroup>
       
        </SubMenu>
        <SubMenu key="sub2" icon={<ProfileOutlined />} title="빅매치">
        <Menu.ItemGroup key="g2" title="더비매치/챔스티켓/강등매치">
          <Menu.Item key="5">더비</Menu.Item>
          <Menu.Item key="6">챔스권 경기</Menu.Item>
          <Menu.Item key="8">강등권 경기</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        
      </Menu> 
      <Route exact path="/epl" component={EPL}/>
      <Route exact path="/efl" component={EFL}/>
      <Route exact path="/league1" component={LEAGUE1}/>
       </>
       </BrowserRouter>
      );
        



function EPL(){
  const [soccer1, setSoccer1] =React.useState([]);
      React.useEffect(() => {
        axios.get('http://localhost:8000/api/yoonproject/epl/')
        .then(response =>{
          const{data} = response;
          setSoccer1(data);
          }).catch(error=> {console.error(error);
          });
        },[])
  
  return(
  <>
  <span>
  {
  soccer1.map((data1)=>{
    return <li>{data1.name}{data1.status}</li>
  })}
  </span>
 
  
  </>
  )
}
  
function EFL(){
  const [soccer1, setSoccer1] =React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/yoonproject/efl/')
    .then(response =>{
      const{data} = response;
      setSoccer1(data);
      }).catch(error=> {console.error(error);
      });
    },[])
  return (
    <>
 <div>{
  soccer1.map((data2)=>{
    return <div>{data2.name}{data2.status}{data2.group}</div>
  })}</div>
    </>
  )
}

function LEAGUE1(){
 
  
  const [soccer1, setSoccer1] =React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/yoonproject/league1/')
    .then(response =>{
      const{data} = response;
      setSoccer1(data);
      }).catch(error=> {console.error(error);
      });
    },[])
  return (
    <>
<div style={{float:"left", marginLeft:"200px", width:"200px", height:"10px"}}>{
  soccer1.map((data3)=>{
    return <ul>{data3.name}{data3.status}{data3.group}</ul>
  })}</div>
    </>
  )
  }

// function EPL(){

//   return (
//     <>
// EPL
//     </>
//   )
// }

// function EPL(){

//   return (
//     <>
// EPL
//     </>
//   )
// }

// function EPL(){

//   return (
//     <>
// EPL
//     </>
//   )
// }

// function EPL(){

//   return (
//     <>
// EPL
//     </>
//   )
// }
}
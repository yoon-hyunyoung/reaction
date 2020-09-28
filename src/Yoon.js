import React, {useReducer, useState} from 'react';
import 'antd/dist/antd.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined, HeartOutlined, ProfileOutlined } from '@ant-design/icons';
import API from 'Api';
import queryString from 'query-string';
import { BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import logo from 'assets/logo.JPG';
import { Menu } from 'antd';
import axios from 'axios';
import { List, Avatar, Button } from 'antd';
import { SearchOutlined, RestOutlined, PlusOutlined } from '@ant-design/icons';
import Api from 'Api';
import img from 'assets/logo.JPG'

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
      ><img src={img} style={{width:"210px"}}></img>
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
          <Menu.Item key="5"><NavLink exact to="/bigmatch">빅매치</NavLink></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        
      </Menu> 
      <Route exact path="/epl" component={EPL}/>
      <Route exact path="/efl" component={EFL}/>
      <Route exact path="/league1" component={LEAGUE1}/>
      <Route exact path="/bigmatch" component={Bigmatch}/>
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
  
        const Delete___Click  = (seq) => {
          Api.delete('yoonproject/league1/'+ seq) // 삭제 명령을 주고..
          .then(response =>{
            return Api.get('yoonproject/league1?seq='+ seq) // 삭제된 화면을 출력!
        }).then(response=>{
            const{data} = response;
            setSoccer1(prev => ({
              ...prev,
              [seq]:data
            }));
      
        });
        }

        return (
          <><div style={{float:'left',marginTop:"-60px" , fontSize :"200px"}}><PlusOutlined /></div>
      <div  style={{ overflow:"auto", float:"left", marginTop:"50px",marginLeft:"100px", width:"350px", height:"700px"}}>{
        soccer1.map((data1, i)=>{
          return <div>{data1.status}<br/><ul>{i+1}위 {data1.name}
          <Button onClick={()=>{Delete___Click(data1.seq)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} /></ul></div>
        })}</div>
          </>
        )
        }
  
function EFL(){
  const [soccer2, setSoccer2] =React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/yoonproject/efl/')
    .then(response =>{
      const{data} = response;
      setSoccer2(data);
      }).catch(error=> {console.error(error);
      });
    },[])

    const Delete__Click  = (seq) => {
      Api.delete('yoonproject/league1/'+ seq) // 삭제 명령을 주고..
      .then(response =>{
        return Api.get('yoonproject/league1?seq='+ seq) // 삭제된 화면을 출력!
    }).then(response=>{
        const{data} = response;
        setSoccer2(prev => ({
          ...prev,
          [seq]:data
        }));
  
    });
    }

    return (
      <><div style={{float:'left',marginTop:"-60px" , fontSize :"200px"}}><PlusOutlined /></div>
  <div style={{ overflow:"auto", float:"left", marginTop:"50px",marginLeft:"100px", width:"350px", height:"700px"}}>{
    soccer2.map((data2, i)=>{
      return <div>{data2.status}<br/><ul>{i+1}위 {data2.name}
      <Button onClick={()=>{Delete__Click(data2.seq)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} /></ul></div>
    })}</div>
      </>
    )
    }

function LEAGUE1(){
 
  
  const [soccer3, setSoccer3] =React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:8000/api/yoonproject/league1/')
    .then(response =>{
      const{data} = response;
      setSoccer3(data);
      }).catch(error=> {console.error(error);
      });
    },[])

    const Delete_Click  = (seq) => {
      Api.delete('yoonproject/league1/'+ seq) // 삭제 명령을 주고..
      .then(response =>{
        return Api.get('yoonproject/league1?seq='+ seq) // 삭제된 화면을 출력!
    }).then(response=>{
        const{data} = response;
        setSoccer3(prev => ({
          ...prev,
          [seq]:data
        }));
  
    });
    }
  


  return (
    <div style={{height:"1000px", width:"1500px"}}>
      <div style={{float:'left',marginTop:"-60px" , fontSize :"200px"}}><PlusOutlined /></div>
<div style={{ overflow:"auto", float:"left", marginTop:"50px",marginLeft:"100px", width:"350px", height:"700px"}}>{
  soccer3.map((data3, i)=>{
  return <div>{data3.status}<br/><ul>{i+1}위 {data3.name}//{data3.group_name}
  <Button onClick={()=>{Delete_Click(data3.seq)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} /></ul></div>
          
  })}</div>
    </div>
    
  )
  }

function Bigmatch(){
  const [matchs, setMatchs] =React.useState({
    더비: [],
    챔스권경기: [],
    강등권경기: []
  });
  React.useEffect(() => {
    Api.get('yoonproject/bigmatch?group=1')
    .then(response =>{
    const{data} = response;
    setMatchs(prev => ({
        ...prev,
        더비:data
      }));
      }).catch(error=> {console.error(error);
      });
   
    Api.get('yoonproject/bigmatch?group=4')
    .then(response =>{
    const{data} = response;
    console.log(data);
    setMatchs(prev => ({
        ...prev,
        챔스권경기:data
      }));
      }).catch(error=> {console.error(error);
      });
  
    Api.get('yoonproject/bigmatch?group=3')
    .then(response =>{
    const{data} = response;
    setMatchs(prev => ({
      ...prev,
      강등권경기:data
    }));
    }).catch(error=> {console.error(error);
    });
  },[])
  
  // const InsertClick = () => {

  // }
  
  const DeleteClick  = (seq, group) => {

    const bigmatchs = ['','더비','','강등권경기','챔스권경기']

    Api.delete('yoonproject/bigmatch/'+ seq) // 삭제 명령을 주고..
    .then(response =>{

      return Api.get('yoonproject/bigmatch?group='+ group) // 삭제된 화면을 출력!
  }).then(response=>{

      const{data} = response;
      setMatchs(prev => ({
        ...prev,
        [bigmatchs[group]]:data
      }));

  });
  }

  return (
    <><div id='container' 
           style={{width:"2000px", height:"1000px", margin:'0 auto'}}>
      <div style={{float:'left',marginTop:"-60px" , fontSize :"200px"}}><PlusOutlined /></div>
        <div style={{float:'left'}}>
        <List
            header={<div>더비</div>}
            style={{overflow:"auto",margin:"50px", width:"380px", height:"500px",float:"left"}}
            itemLayout="horizontal"
            dataSource={matchs.더비}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date} /<br/> {item.memo}</span>
                                <Button onClick={()=>{DeleteClick(item.seq, item.group)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        /></div><div style={{float:'left'}}>
        <List
            header={<div>챔스권경기</div>}
            style={{margin:"50px", width:"300px",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={matchs.챔스권경기}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button onClick={()=>{DeleteClick(item.seq, item.group)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        /></div><div style={{float:'left'}}>
        <List
            header={<div>강등권경기</div>}
            style={{margin:"50px", width:"300px",float:"left",paddingRight:"5px"}}
            itemLayout="horizontal"
            dataSource={matchs.강등권경기}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<span>{item.name}</span>}
                description={<>
                                <span>{item.group_name}</span> / <span>{item.reg_date}</span>
                                <Button onClick={()=>{DeleteClick(item.seq, item.group)}} style={{float:"right"}} shape="circle" icon={<RestOutlined />} />
                            </>
                            }
                />
            </List.Item>
            )}
        /></div>
        </div>
    </>
    )
}
}  
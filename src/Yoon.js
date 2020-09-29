import React, {useReducer, useState} from 'react';
import 'antd/dist/antd.css'
import { HeartOutlined, ProfileOutlined, DeleteFilled, PlusOutlined  } from '@ant-design/icons';
import API from 'Api';
import queryString from 'query-string';
import { BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import logo from 'assets/logo.JPG';
import { Menu,  List, Button, Checkbox, Form, Modal,  Input,  Radio,  Select,  Cascader,  DatePicker,  InputNumber,  TreeSelect } from 'antd';
import axios from 'axios';
import Api from 'Api';
import img from 'assets/logo.JPG'

const { SubMenu } = Menu;

export default function Yoon(){
 

  const [group, setGroup] = React.useState([]);
  const [yoons, setYoons] = React.useState({
    EPL :[],
    EFL : [],
    리그1 : []
});

const [form] = Form.useForm();

const[state, setState] = useState({
  visible:false
})


  const handleClick = e => {
    console.log('click ', e);
    setState({ current: e.key });
  };
  
  React.useEffect(()=>{
    API.get("yoonproject/eplallselectview").then(res=>{
      const {data} = res;
      setYoons(prev => data);
  })

},[])
  React.useEffect(()=>{

    API.get("yoonproject/eplgroup").then(res=>{
        const {data} = res;
        setGroup(prev => data);
    })

},[])
  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = e => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleCancel = e => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const onFinish = e => {        
    e.end_date = e.end_date.format("YYYY-MM-DD")
    console.log(e);

    API.post("yoonproject/eplallselectview/", e).then(res=>{
        return API.get("yoonproject/eplallselectview/")
    }).then(
        res=>{
            const {data} = res;
            setYoons(prev => data);
            form.resetFields();
            setState(prev => ({
                visible: false
            }));     
})

}
  const deleting = (seq) => {

    API.delete("yoonproject/eplallselectview/" + seq).then(res=>{
        return API.get("yoonproject/eplallselectview/")
    }).then(
        res=>{
            const {data} = res;
            setYoons(prev => data);
        }
    )
  }

      return (
        <BrowserRouter>
       <>
       <Menu
        onClick={handleClick}
        style={{ width: "200px", float:"left" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
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
      {/* <Route exact path="/login" component={Login}/> */}
      {/*  */}
      <Button type="primary" onClick={showModal}>
          추가</Button>
      
      <Modal
          title="추가"
          visible={state.visible}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
        <Form form={form} onFinish={onFinish} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">        
        <Form.Item  name="name" label="이름">
          <Input />
        </Form.Item>
        <Form.Item  name="status" label="상태">
          <Select>
          <Select.Option value=""></Select.Option>
            <Select.Option value="EPL">EPL</Select.Option>
            <Select.Option value="EFL">EFL</Select.Option>
            <Select.Option value="리그1">리그1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item  name="end_date" label="종료일">
            <DatePicker />
        </Form.Item>
        <Form.Item  name="win" label="win">
          <Input />
        </Form.Item>
        <Form.Item  name="lose" label="lose">
          <Input />
        </Form.Item>
        <Form.Item  name="draw" label="draw">
          <Input />
        </Form.Item>
        <Form.Item  name="score" label="score">
          <Input />
        </Form.Item>
        <Form.Item name="group" label="그룹">
          <Select>
          <Select.Option value="">선택</Select.Option>
              {group.map((v)=>{
                  return <Select.Option value={v.seq}>{v.name}</Select.Option>            
              })}
          </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
          <Button onClick={handleCancel}>
            취소
          </Button>
          </Form>
        </Modal>



        
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
  
 
        return (
          <><div style={{float:'left',marginTop:"-60px" , fontSize :"200px"}}><PlusOutlined /></div>
      <div  style={{overflow:"auto", float:"left", marginTop:"50px",marginLeft:"100px", width:"430px", height:"700px"}}>{
        soccer1.map((data1, i)=>{
        return <div>{data1.status}<br/><ul>{i+1}위[{data1.name}] 연고지: {data1.group_name} // {data1.win}/ {data1.draw}/ {data1.lose}/ {data1.score}
          <Button onClick={()=>{deleting(data1.seq)}} style={{float:"right"}} shape="circle" icon={<DeleteFilled />} /></ul></div>
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

   

    return (
      <><div style={{float:'left',marginTop:"-60px" , fontSize :"200px"}}><PlusOutlined /></div>
  <div style={{ overflow:"auto", float:"left", marginTop:"50px",marginLeft:"100px", width:"350px", height:"700px"}}>{
    soccer2.map((data2, i)=>{
      return <div>{data2.status}<br/><ul>{i+1}위[{data2.name}] 연고지: {data2.group_name} // {data2.win}/ {data2.draw}/ {data2.lose}/ {data2.score}
      <Button onClick={()=>{deleting(data2.seq)}} style={{float:"right"}} shape="circle" icon={<DeleteFilled />} /></ul></div>
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

    
  return (
    <div style={{height:"1000px", width:"1500px"}}>
      <div style={{float:'left',marginTop:"-60px" , fontSize :"200px"}}><PlusOutlined /></div>
<div style={{ overflow:"auto", float:"left", marginTop:"50px",marginLeft:"100px", width:"350px", height:"700px"}}>{
  soccer3.map((data3, i)=>{
    return <div>{data3.status}<br/><ul>{i+1}위[{data3.name}] 연고지: {data3.group_name} // {data3.win}/ {data3.draw}/ {data3.lose}/ {data3.score}
  <Button onClick={()=>{deleting(data3.seq)}} style={{float:"right"}} shape="circle" icon={<DeleteFilled />} /></ul></div>
          
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
                                <Button onClick={()=>{DeleteClick(item.seq, item.group)}} style={{float:"right"}} shape="circle" icon={<DeleteFilled />} />
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
                                <Button onClick={()=>{DeleteClick(item.seq, item.group)}} style={{float:"right"}} shape="circle" icon={<DeleteFilled />} />
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
                                <Button onClick={()=>{DeleteClick(item.seq, item.group)}} style={{float:"right"}} shape="circle" icon={<DeleteFilled />} />
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

  

};

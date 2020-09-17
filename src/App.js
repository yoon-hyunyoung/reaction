import React from 'react';
import 'App.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';

function Count() {
  const [cnt, setCnt] = React.useState(0)
  const click = (event) => {
    setCnt(cnt + 1) 
  }
  return (
    <div>
      합계숫자는? <span>{cnt}</span>
      <div onClick={click}>클릭</div>    
    </div>
  )
}

function App() {
  return (
    <div id='content'>
      <Count/>
    </div>
  );
}

export default App;

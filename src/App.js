import React from 'react';
import 'App.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';
// import Count from 'Count';
// import Act from 'Act';
// import Welcome from 'Welcome';
import Bbutton from 'Bbutton';

const  x = [2, 3, 4, 5, 7]
const map = x.map(x => x / 9);
console.log("평균자책점으로 응용 가능", map);

function App() {
  return (
    <div>
      {/* <Count/>
      <Act/>
      <Welcome/> */}
      <Bbutton/>
    </div>
  );
}

export default App;

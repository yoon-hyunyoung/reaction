import React from 'react';
import 'App.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import Count from 'Count';
import Act from 'Act';
import Welcome from 'Welcome';
import Bbutton from 'Bbutton';
import Silsoup01 from 'Silsoup01';
import Silsoup02 from 'Silsoup02';
import Silsoup03 from 'Silsoup03';
import Silsoup04 from 'Silsoup04';
import Parents from 'Parents';
import Add_p from 'Add_p';
import Gugudan_p from 'Gugudan_p';
import Todolist_p from 'Todolist_p';
import Hovertest from 'Hovertest';
import CountArray from 'CountArray';
import Clock from 'Clock'
import Timer from 'Timer'
import RSP from 'RSP'

// function Parents()
// {
//   const [num, setNum] = React.useState(50)
//   const changeNumber = (number) => {
//     setNum(number);
//   }
//   return (
//     <>
//       {num}
//       <Child changeNumber={changeNumber} 
//              color={"red"}
//              number={10}
//              student={{name:'홍길동', age:35, address:'인천'}}
//       />
//     </>
//   )
// }
// function Child({changeNumber, color, number, student})
// {
//   // const x = {name:"홍길동", age:35};
//   // const {name, age} = x;  
//   console.log(number)
//   console.log(color)
//   console.log(student)
//   const click = () => {
//     changeNumber(10)
//   }
//   return(
//     <>
//     <button onClick={click}>클릭</button>
//     </>
//   )
// }






const  x = [2, 3, 4, 5, 7]
const map = x.map(x => x / 9);
console.log("평균자책점으로 응용 가능", map);




function JsxTest() {
  const[a, setA]= React.useState(false);
  const user = 3


  return (
    //큰div가 하나로 꼭 감싸줘야함!
    <div>
      {true && <div>참일경우만 보입니다 </div>}
      {false ? <div>참입니다</div> : <div>거짓입니다</div>}
      {
        (() => {
          //함수
          if (user == 1) return <div>유저가 11111111111111</div>
          else if (user == 2) return <div>유저가 2222222222222</div>
          else return <div>rightstand writing please!</div>
        })()
      }
    </div>
  );
}



function App() {
  return (
    <div>
      {/* <Count/>
      <Welcome/>
      <Act/>
      <Bbutton/>
      <JsxTest/>
      <Silsoup01/>
      <Silsoup02/>
      <Silsoup03/>
      <Silsoup04/>
      <Parents/>
      <Add_p/> 
      <Gugudan_p/>
      <Todolist_p/>
      <Hovertest/> */}
      {/* <CountArray/>
      <Clock/><br/><br/> */}
      <Timer/>
      <RSP/>
    </div>
  );
}

export default App;

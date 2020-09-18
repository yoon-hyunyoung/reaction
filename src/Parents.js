import React from 'react';
import Child from  'Child'
function Parents() 
{
    const [num, setNum] = React.useState(10)
  return (
    <div>
      {num}
      <Child num={num}
      color='red'
      number={10}
      student={{name:"홍길동", age:35, address:"인천"}}/>
    </div>
  );
}
export default Parents;









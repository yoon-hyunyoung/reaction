import React from 'react';

function Child(prop) 
{
    console.log(prop.num)
    console.log(prop.number)
    console.log(prop.student)
  return (
    <div>
      <div>{prop.num}</div> 
      <div>{prop.number}</div> 
      <div>{prop.student.name}</div> 
    </div>
  );
}


export default Child;  
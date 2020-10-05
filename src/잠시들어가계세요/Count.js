import React from 'react';


function Count() {
  const [cnt, setCnt] = React.useState(0);
  const click23 = (event) => {
    setCnt(cnt + 1);
  }
  return (
    <div>
      합계숫자는? <span>{cnt}</span>
      <div onClick={click23}>클릭</div>    
    </div>
  );
}


export default Count;



import React from 'react';


function Silsoup01() {
    const students = [
        {name:'이수만', age:'60', address:'인천'},
        {name:'유희열', age:'45', address:'서울'},
        {name:'방시혁', age:'43', address:'부산'},
        {name:'박진영', age:'34', address:'광주'}
        // '옥수수', '피자', '라면'
    ]
  
  
    return (
        //큰div가 하나로 꼭 감싸줘야함!

        <div>
            <table>
                <td>
                <tr>이름</tr>
                </td>
                <td>
                <tr>나이</tr>
                </td>
                <td>
                <tr>주소</tr>
                </td>
            </table>
            {students.map((a,index) => {
                return<table key={index}>
                            <td>
                                <tr>{a.name}</tr>
                            </td>
                            <td>
                                <tr>{a.age}</tr>
                                </td>
                            <td>
                                <tr>{a.address}</tr>
                                </td>
                        </table>

            })}

        </div>

    )
};

    
export default Silsoup01;




import React from 'react';
import Axios from 'axios';
import API from 'Api';
export default function Axiosscore() {
    const [scores, setScores] = React.useState([]);
    const [id, setId] = React.useState(null);
    React.useEffect(()=>{
        API.get("study/scores/")
        .then(res => {
            console.log(res);
            const { data } = res;
            setScores(data);
        }).catch(error=>{
            console.log(error);
        })
    }, [])
    const click = (e) => {
        console.dir(e.target)
        console.log(e.target.id);
        setId(e.target.id);
    }
    return(
        <div>
            {
                scores.map((v)=>{
                    return <div id={v.id} onClick={click}>1111{v.name}</div>
                })
            }
            <hr/>
            <AxiosscoreDetail id={id} />
        </div>
    )
}
function AxiosscoreDetail({id}) {
    const [score, setScore] = React.useState(null)
    React.useEffect(()=> {
        API({
            method:"GET",
            url:("study/scores/" + id)
        })
        .then(res => {
            console.log(res);
            const { data } = res;  
            setScore(data);
        }).catch(error=>{
            console.log(error);
        })
        console.log("점수 나와라")
    },[id])
    return(
    <div>
        {score &&
            <table style={{border:"3px solid pink"}}> 
            <tr>
                <td style={{border:"3px solid hotpink"}}>이름</td>
                <td style={{border:"3px solid hotpink"}}>수학</td>
                <td style={{border:"3px solid hotpink"}}>과학</td>
                <td style={{border:"3px solid hotpink"}}>영어</td>
            </tr>
                <tr style={{backgroundColor:"yellow"}}>
            <td style={{border:"3px solid pink"}}>{score.name}</td>    
            <td style={{border:"3px solid pink"}}>{score.math}</td>    
            <td style={{border:"3px solid pink"}}>{score.science}</td>    
            <td style={{border:"3px solid pink"}}>{score.english}</td>    
            </tr>
            </table>}
        
    </div>
    )
}
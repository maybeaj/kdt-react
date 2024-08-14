import { useState , useEffect } from 'react';

const MAX_CAPACITY = 10;

function Accomodate(props) {

    const [ isFull, setIsFull ] = useState(false);
    const [ cnt, setCnt ] = useState(0);

    const increaseCnt = () => {
        if ( cnt < MAX_CAPACITY ) {
            setCnt(cnt+1);
        } else {
            setIsFull(true);
        }
        console.log("debug >>> cnt event ,", cnt);
    }

    const decreaseCnt = () => {
        if ( cnt > 0 ) {
            setCnt(cnt-1);
            setIsFull(false);
        } 
    }

    useEffect(()=>{
        console.log(">>>>>>> useEffect cnt", cnt);
        if ( cnt >= MAX_CAPACITY ){
            setIsFull(true);
        }
    },[ cnt ]); //update로 인해 재렌더링일 때 실행

    return(
        <div className="container">
        <div>
            <p>{`총 ${cnt} 명 수용하였습니다.`}</p>
            <button onClick = {increaseCnt} disabled = {isFull} className="btn btn-primary">입장</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick = {decreaseCnt} className="btn btn-danger">퇴장</button>
            
            { isFull && <p style ={{color : "red"}}>정원이 가득찼습니다.</p>}
        </div>
        </div>
    );
}

export default Accomodate ;
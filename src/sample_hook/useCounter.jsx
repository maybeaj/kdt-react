// useXXXX 사용자 정의 훅
import { useState } from 'react';

function useCounter() {
    const [ cnt, setCnt ] = useState(0);
    // const [ isFull, setIsFull ] = useState(false);

    const increaseCnt = () => {
        setCnt(( cnt ) => 
            cnt + 1
        );
    }

    const decreaseCnt = () => {
        setCnt( ( cnt ) => 
            Math.max(cnt-1,0)
        );
    }
    
    return [ cnt,  increaseCnt, decreaseCnt ] ;
}

export default useCounter;
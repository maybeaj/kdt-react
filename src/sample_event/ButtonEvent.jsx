import { useState } from 'react';

function ButtonEvent (props) {
    
    const [ isFlag, setIsFlag ] = useState(true);
    const btnHandler = (name, e) => {
        console.log(`debug >>> btn click ${name} ${e.target}!!`);
        setIsFlag( (isFlag) => !isFlag );
    }
    return (
        <div className='container'>
        <button className={ isFlag ? "btn btn-primary" : "btn btn-danger"} onClick={(e) => btnHandler('jslim',e)}>
            { isFlag ? '꺼짐' : '켜짐'}</button>
        </div>
    );
}

export default ButtonEvent ;
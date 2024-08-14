import React from 'react';

function Book(props) {
    return (
        <div>
            <h2>{`처음으로 배우는 SPA 기반 ${props.firstName}, ${props.secondName}`}</h2>
        </div>
    ) ;
}

export default Book ;
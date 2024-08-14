import React from 'react';
import Book from './Book' ;


function Library() {
    return(
        <div align="center">
            <Book firstName='vue' secondName='react' />
            <Book firstName='java' secondName='springboot' />
        </div>
    );
}

export default Library ;
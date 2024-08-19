import { useState } from 'react';


import TempInput from "./TempInput";
import BoilingVerdict from './BoilingVerdict';

const toCelsius = (f) => {
    return ( f - 32 ) * 5 / 9 ;

}

const toFahrenheit = (c) => {
    return ( c * 9 / 5 ) + 32 ;
}

const tryConvert = (temp , convert ) => {
    const input = parseFloat(temp);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
function Calculator(props){

    const [ temp, setTemp ] = useState('');
    const [ scale, setScale ] = useState('c');

    const changeCelsius = (temp) => {
        setTemp(temp);
        setScale('c');
    }

    const changeFahrenheit = (temp) => {
        setTemp(temp);
        setScale('f');
    }

    const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp ;
    const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp ;
    return (
        
        <div className="container">
            <TempInput scale='c' temp={celsius} onTempChange={changeCelsius}/>
            <TempInput scale='f' temp={fahrenheit} onTempChange={changeFahrenheit}/>
            <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    ) ;
}

export default Calculator ; 
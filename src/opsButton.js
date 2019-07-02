import React, {Component} from 'react';


class opsButton extends Component {
    multiply = () => {
        let multiplication = opsArray.indexOf('*');
        while(multiplication != -1){
            numsArray.splice(multiplication, 2, numsArray[multiplication]* numsArray[multiplication+1]);
            opsArray.splice(multiplication, 1);
            multiplication = opsArray.indexOf('*');
        };
    };
    
    divide = () => {
        let division = opsArray.indexOf('/');
        while(division != -1){
            numsArray.splice(division, 2, numsArray[division]/ numsArray[division+1]);
            opsArray.splice(division, 1);
            division = opsArray.indexOf('/');
        };
    };
    
    add = () => {
        let addition = opsArray.indexOf('+');
        while(addition != -1){
            numsArray.splice(addition, 2, numsArray[addition]+ numsArray[addition+1]);
            opsArray.splice(addition, 1);
            addition = opsArray.indexOf('+');    
        };
    };
    
    
    subtract = () => {
        let subtraction = opsArray.indexOf('-');
        while(subtraction != -1){
            numsArray.splice(subtraction, 2, numsArray[subtraction]- numsArray[subtraction+1]);
            opsArray.splice(subtraction, 1);
            subtraction = opsArray.indexOf('-');
        }
    };
    
    render(){
        <button onClick={clickHandler}>{name}</button>
    };
};

export default opsButton;
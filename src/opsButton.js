import React, {Component} from 'react';


const opsButton = props => {
    const { clickHandler, name } = props
    return <button onClick={clickHandler}>{name}</button>
};

export default opsButton;
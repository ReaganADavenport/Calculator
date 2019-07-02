import React from 'react';


const numButton = props =>{
    const {clickHandler, name} = props;
    return <button onClick={clickHandler}>{name}</button>
}

export default numButton;
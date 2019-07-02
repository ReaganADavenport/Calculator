//libraries
import React, {Component} from 'react';
//components
import opsButton from './opsButton';
import numButton from './numButton';
//CSS
import './App.css';


class App extends Component {

  render (){
    return (
      <div className="App">
        <opsButton clickHandler={add} name={'+'}></opsButton>
        <opsButton clickHandler={subtract} name={'-'}></opsButton>
        <opsButton clickHandler={multipy} name={'*'}></opsButton>
        <opsButton clickHandler={divide} name={'/'}></opsButton>
      </div>
    );
  };
};

export default App;

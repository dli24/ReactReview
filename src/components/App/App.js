import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from '../Nav/Nav'
import Todos from '../Todos/Todos'

let todos= [
  {
    task: 'learn react',
    complete:false,
    _id: '0'
  },{
    task: 'learn component',
    complete:false,
    _id: '1'
  },{
    task: 'have fun',
    complete:true,
    _id: '2'
  }
]



class App extends Component {
  // reverse going up

  render(){
  return (
    <div className="app">
    {/* Nav with BootStrap */}
      <Nav />
      <Todos todos={todos} updateTodo={this.updateTodo}/>

    </div>
  );
  }
}

export default App;

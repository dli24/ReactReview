import React, {Component} from 'react';

class Todo extends Component{
    state= {
        complete: this.props.todo.complete
    };

completeTodo = () =>{
    this.setState({
        complete: true
    });
};



    render(){
        const {task} = this.props.todo;
        const {complete} = this.state;

        let button  = complete ? (<p>GREAT!</p>) : (<button onClick={this.completeTodo}>Complete</button>)

        return(
            <>
            <h1>{task}</h1>
            <h2>Complete: {complete.toString()}</h2>
            {/* <button onClick={this.completeTodo}>Complete</button> */}
            {button}
            </>
        )




    }
}


export default Todo;
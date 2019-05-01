import React, {Component} from 'react';
import Todo from '../Todo/Todo'


class Todos extends Component {
    render(){
        const {todos} = this.props;
        console.log(todos);
        let allTodos = todos.map((todo)=>{
            return <Todo key={todo._id} todo={todo} updateTodo={this.props.updateTodo}/>
        })
        return(
            <>{allTodos}</>

        )
    }
}

export default Todos;
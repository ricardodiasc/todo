import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos:props.store.getState()
        }
    }
    
    componentDidMount(){
        this.props.store.subscribe(
            ()=>{
                this.setState({
                    todos:this.props.store.getState().todos
                });
        });
    }

    render() {
        return (
            <div>
                  <ul>
                        {
                            this.state.todos && this.state.todos.map(todo=>{
                                return (
                                    <li key={todo.id}>{todo.descricao}</li>
                                )
                            })
                        }
                    </ul>
            </div>
        );
    }
}

export default TodoList;
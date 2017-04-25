import React, { Component } from 'react';
import {listarTodosApi} from './api/todo-api';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : []
        }
    }

    async carregarTodos(event){
        event.preventDefault();
        console.log('clicou no evento :)');
        let todos = await listarTodosApi();
        this.setState({
            todos: todos
        })
        console.log(todos);
    }

    addTodo(event){
        event.preventDefault();

    }

    markCompleted(event){
        console.log('click task')
        console.log(event)
    }

    render() {
        return (
            <div>
                <input type="text" name=""/>
                <button onClick={this.carregarTodos.bind(this)}>Carregar Todos</button>                
                <button onClick={this.addTodo.bind(this)}>Adicionar Todo</button>
                <div>
                    <ul>
                        {
                            this.state.todos && this.state.todos.map(todo=>{
                                return (
                                    <li key={todo.id} onClick={this.markCompleted.bind(this)}>{todo.descricao}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
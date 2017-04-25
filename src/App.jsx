import React, { Component } from 'react';
import {listarTodosApi, incluirTodoApi} from './api/todo-api';

import IncluirTodo from './components/IncluirTodo';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [],
            descricaoNovo:''
        }
    }

    async carregarTodos(event){
        
        let todos = await listarTodosApi();
        this.setState({
            todos: todos
        })
        console.log(todos);
    }

    addTodo(descricaoNovo){
        incluirTodoApi(descricaoNovo);
    }

    markCompleted(event){
        console.log('click task');
        console.log(event)
    }

    render() {
        return (
            <div>
                <IncluirTodo addTodo={this.addTodo.bind(this)} carregarTodos={this.carregarTodos.bind(this)} descricaoNovo={this.state.descricaoNovo} />
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
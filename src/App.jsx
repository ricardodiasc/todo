import React, { Component } from 'react';
import { listarTodosApi, incluirTodoApi} from './api/todo-api';

import IncluirTodo from './components/IncluirTodo';
import TodoList from './components/TodoList';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [],
            descricaoNovo:''
        }
    }



    carregarTodos(event){
        this.props.store.dispatch({type:'LISTAR_TODOS',
            todos:[{
                id:1,
                descricao:'teste',
                completed:false
            }]});
    }

    addTodo(descricaoNovo){
        incluirTodoApi(descricaoNovo);
    }

    render() {
        return (
            <div>
                <IncluirTodo addTodo={this.addTodo.bind(this)} carregarTodos={this.carregarTodos.bind(this)} descricaoNovo={this.state.descricaoNovo} />
                <TodoList store={this.props.store} />
            </div>
        );
    }
}

export default App;
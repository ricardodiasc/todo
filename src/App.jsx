import React, { Component } from 'react';
import { listarTodosApi, incluirTodoApi} from './api/todo-api';
import { createStore } from 'redux';
import { todoReducer } from './reducer/todo-reducer';

import IncluirTodo from './components/IncluirTodo';

const store = createStore(todoReducer);


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [],
            descricaoNovo:''
        }

        
    }

    componentDidMount(){
        store.subscribe(
            ()=>{
                this.setState({
                    todos:store.getState().todos
                });
        });
        
    }

    carregarTodos(event){
        store.dispatch({type:'LISTAR_TODOS',
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
            </div>
        );
    }
}

export default App;
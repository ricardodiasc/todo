import React, { Component } from 'react'

class IncluirTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            descricaoNovo:props.descricaoNovo
        }
    }

    incluirTodo(){
        console.log(this.descricaoNovoInput.value);
        this.props.addTodo(this.descricaoNovoInput.value);
    }



    render () {
        return (
            <div>
                <input type="text" name="descricaoNovo" ref={input => this.descricaoNovoInput = input} />
                <button onClick={this.props.carregarTodos}>Carregar Todos</button>                
                <button onClick={this.incluirTodo.bind(this)}>Adicionar Todo</button>

            </div>
        )
    }
}

export default IncluirTodo
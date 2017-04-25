export function todoReducer(state = [], action) {
    switch (action.type) {
        
        case 'LISTAR_TODOS':
            return Object.assign({}, state, {
                todos: action.todos
            })
        case 'DELETAR_TODOS':
            return Object.assign({},state,{todos:[]});
        default:
            return state
    }
}


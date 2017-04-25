export async function listarTodosApi() {
    let result = await fetch('http://localhost:8080/todo/');
    let todos = await result.json();
    return todos;
}


export async function incluirTodoApi(descricao){
    try{
        let novoObjeto = {
                                id: 1,
                                descricao: descricao,
                                completed:false
                            }
        let objetoString = JSON.stringify(novoObjeto);

        console.log(novoObjeto);

        let response = await fetch('http://localhost:8080/todo', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: objetoString 
        });
        let x = response.text();
    }catch (e){
        console.error("Erro no post: "+e);
    }
    
}
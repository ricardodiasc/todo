export async function listarTodosApi() {
    let result = await fetch('http://localhost:8080/todo/');
    let todos = await result.json();
    return todos;
}
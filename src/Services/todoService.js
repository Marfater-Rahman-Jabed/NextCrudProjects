export async function getTodos() {
    const result = await fetch(`http://localhost:3000/api/Todo`)
    return result.json()
}

export async function postTodos(data) {
    const result = await fetch(`http://localhost:3000/api/Todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return result.json()
}

export async function deleteTodos(data) {
    const result = await fetch(`http://localhost:3000/api/Todo/${data}`, {
        method: 'DELETE'
    })
    return result.json();
}

export async function UpdateTodo(data) {
    const result = await fetch(`http://localhost:3000/api/Todo/${data}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return result.json();

}
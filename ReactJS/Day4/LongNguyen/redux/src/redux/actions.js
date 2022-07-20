export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const deleteTodo = (data) => {
    return {
        type: 'todoList/deleteTodo',
        payload: data
    }
}

export const generalTodo = (data) => {
    return {
        type: 'todoList/generalTodo',
        payload: data
    }
}

export const changeTodo = (data) => {
    return {
        type: 'todoList/changeTodo',
        payload: data
    }
}
export const sortTodo = (data) => {
    return {
        type: 'todoList/sortTodo',
        payload: data
    }
}
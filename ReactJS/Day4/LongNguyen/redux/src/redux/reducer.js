import { v4 as uuidv4 } from 'uuid';
const initState = {
    filters: {
        search: '',
        status: 'all',
        sort: []
    },
    todoList: [
        {
            id: uuidv4(),
            name: 'Gym',
            status: true
        },
        {
            id: uuidv4(),
            name: 'Football',
            status: false
        },
        {
            id: uuidv4(),
            name: 'Voleyball',
            status: true
        }
    ],
    sort:"default"
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList : [
                    ...state.todoList,
                    action.payload
                ]
            }

            case 'todoList/deleteTodo':
                return {
                    ...state,
                    todoList : action.payload,
                }
            case 'todoList/generalTodo':
                return {
                    ...state,
                    todoList : action.payload,
                }
            case 'todoList/changeTodo':
            return {
                ...state,
                todoList : action.payload,
            }
            case 'todoList/sortTodo':
            return {
                ...state,
                sort : action.payload,
            }
            default:
        return state;  
    }  
    
}

export default rootReducer;
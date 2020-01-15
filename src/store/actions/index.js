import { CREATE_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants'

export const createTodo = (todo) => {
    return dispatch => {
        dispatch({ type: CREATE_TODO, payload: todo })
    }
}

export const removeTodo = () => {
    return dispatch => {
        dispatch({ type: REMOVE_TODO })
    }
}

export const toggleTodo = (index) => {
    return dispatch => {
        dispatch({ type: TOGGLE_TODO, payload: index })
    }
}
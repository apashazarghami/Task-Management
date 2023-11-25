import { ADD_TASK, FAILURE_REQUEST, PENDING_REQUEST, REMOVE_TASK, SUCCESS_REQUEST } from "./taskTypes";

const INITIAL_STATE = {
    isLoading: false,
    tasks: [],
    error: null
}

const taskReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case PENDING_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_REQUEST: 
            return {
                ...state,
                isLoading: false,
                tasks: payload
            }
        case FAILURE_REQUEST: 
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        case REMOVE_TASK:
            const filteredTasks = state.tasks.filter(task => task.id !== payload)
            return {
                ...state,
                tasks: filteredTasks
            }
        default: return state
    }
}

export default taskReducer;
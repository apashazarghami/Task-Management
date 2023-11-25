import { FAILURE_REQUEST, PENDING_REQUEST, SUCCESS_REQUEST } from "./taskTypes";

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
        default: return state
    }
}

export default taskReducer;
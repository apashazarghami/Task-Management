import { ADD_TASK, FAILURE_REQUEST, PENDING_REQUEST, SUCCESS_REQUEST } from "./taskTypes"

const pendingRequest = () => {
    return {
        type: PENDING_REQUEST
    }
}

const successRequest = payload => {
    return {
        type: SUCCESS_REQUEST,
        payload
    }
}

const failureRequest = payload => {
    return {
        type: FAILURE_REQUEST,
        payload
    }
}

const addTask = payload => {
    return {
        type: ADD_TASK,
        payload
    }
}

export { pendingRequest, successRequest, failureRequest, addTask }
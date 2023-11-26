import {
  ADD_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  FAILURE_REQUEST,
  PENDING_REQUEST,
  REMOVE_TASK,
  SORT_TASK,
  SUCCESS_REQUEST,
} from "./taskTypes";

const pendingRequest = () => {
  return {
    type: PENDING_REQUEST,
  };
};

const successRequest = (payload) => {
  return {
    type: SUCCESS_REQUEST,
    payload,
  };
};

const failureRequest = (payload) => {
  return {
    type: FAILURE_REQUEST,
    payload,
  };
};

const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

const removeTask = (payload) => {
  return {
    type: REMOVE_TASK,
    payload,
  };
};

const completeTask = (payload) => {
  return {
    type: COMPLETE_TASK,
    payload,
  };
};

const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

const sortTask = (payload) => {
  return {
    type: SORT_TASK,
    payload,
  };
};

export {
  pendingRequest,
  successRequest,
  failureRequest,
  addTask,
  removeTask,
  completeTask,
  editTask,
  sortTask,
};

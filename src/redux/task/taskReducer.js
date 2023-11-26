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

const INITIAL_STATE = {
  isLoading: false,
  tasks: [],
  error: null,
};

const taskReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PENDING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_REQUEST:
      return {
        ...state,
        isLoading: false,
        tasks: payload,
      };
    case FAILURE_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case REMOVE_TASK:
      const filteredTasks = state.tasks.filter((task) => task.id !== payload);
      return {
        ...state,
        tasks: filteredTasks,
      };
    case COMPLETE_TASK:
      state.tasks.forEach((task) => {
        if (String(task.id) === String(payload)) {
          task.completed = !task.completed;
        }
      });
      return {
        ...state,
      };
    case EDIT_TASK:
      state.tasks.forEach((task) => {
        if (String(task.id) === String(payload.id)) {
          task.title = payload.title;
          task.description = payload.description;
        }
      });
      return {
        ...state,
      };
    case SORT_TASK:
      const completedTask = [...state.tasks].sort(
        (a, b) =>
          new Date(b.completed).getTime() - new Date(a.completed).getTime()
      );
      const uncompletedTask = [...state.tasks].sort(
        (a, b) =>
          new Date(a.completed).getTime() - new Date(b.completed).getTime()
      );
      return {
        ...state,
        tasks: payload === "COMPLETED" ? completedTask : uncompletedTask,
      };
    default:
      return state;
  }
};

export default taskReducer;

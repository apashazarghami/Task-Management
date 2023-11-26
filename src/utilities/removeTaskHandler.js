import { removeTask } from "../redux/task/taskActions";
import { notify } from "./authenticationForm";
import { app } from "./axios";

const removeTaskHandler = async ({ id, dispatch, title }) => {
  try {
    await app.delete(`api/tasks/${id}`);
    dispatch(removeTask(id));
    notify(`The ${title} deleted successfully`, "success");
  } catch (err) {
    notify(err.message);
  }
};

export default removeTaskHandler;

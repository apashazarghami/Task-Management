import { completeTask } from "../redux/task/taskActions";
import { notify } from "./authenticationForm";
import { app } from "./axios";

const completeTaskHandler = async ({ task, dispatch }) => {
  const { id, title, description, completed } = task;
  try {
    await app.put(`api/tasks/${id}`, {
      id,
      title,
      description,
      completed: !completed,
    });
    dispatch(completeTask(id));
    completed
      ? notify(`The ${title} uncompleted successfully`, "success")
      : notify(`The ${title} completed successfully`, "success");
  } catch (err) {
    notify(err.message);
  }
};

export default completeTaskHandler;

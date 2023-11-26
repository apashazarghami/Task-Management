import { addTask } from "../redux/task/taskActions";
import { authenticationForm, notify } from "./authenticationForm";
import { app } from "./axios";

const addTaskHandler = async (
  {
    title,
    description,
    setIsLoading,
    dispatch,
    setTitle,
    setDescription,
    titleRef,
    descriptionRef,
  },
  event
) => {
  event.preventDefault();
  authenticationForm({ title, description, titleRef, descriptionRef });
  if (title.trim() && description.trim()) {
    setIsLoading(true);
    const task = { id: Date.now(), title, description, completed: false };
    try {
      await app.post("api/tasks", task);
      dispatch(addTask(task));
      setTitle("");
      setDescription("");
      notify(`${title} save successfully`, "success");
    } catch (err) {
      notify(err.message);
    } finally {
      setIsLoading(false);
    }
  }
};

export default addTaskHandler;

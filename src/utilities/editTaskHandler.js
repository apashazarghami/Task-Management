import { editTask } from "../redux/task/taskActions";
import { authenticationForm, notify } from "./authenticationForm";
import { app } from "./axios";

const editTaskHandler = async ({
  task,
  editedTitle,
  editedDescription,
  titleRef,
  descriptionRef,
  dispatch,
  setEdit,
}) => {
  const { id, completed } = task;
  authenticationForm({
    title: editedTitle,
    description: editedDescription,
    titleRef,
    descriptionRef,
  });
  if (editedTitle.trim() && editedDescription.trim()) {
    try {
      await app.put(`api/tasks/${id}`, {
        id,
        title: editedTitle,
        description: editedDescription,
        completed,
      });
      dispatch(
        editTask({ id, title: editedTitle, description: editedDescription })
      );
      notify(`${editedTitle} editet successfully`, "success");
    } catch (err) {
      notify(err.message);
    } finally {
      setEdit(null);
    }
  }
};

export default editTaskHandler;

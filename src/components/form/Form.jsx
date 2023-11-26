import { useRef, useState } from "react";
import styles from "./Form.module.css";
import TextInput from "./TextInput";
import { useDispatch } from "react-redux";
import addTaskHandler from "../../utilities/addTaskHandler";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch();
  const task = { title, description, setDescription, setIsLoading, setTitle, dispatch, titleRef, descriptionRef };

  const submitHandler = (event) => addTaskHandler(task, event);

  return (
    <form onSubmit={submitHandler}>
      <h3 className={styles.title}>Add Task</h3>
      <div className={styles.TextInputContainer}>
        <TextInput
          label="Title"
          value={title}
          setValue={setTitle}
          ref={titleRef}
          id="title"
          classInput="textInput"
        />
        <TextInput
          label="Description"
          value={description}
          setValue={setDescription}
          ref={descriptionRef}
          id="description"
          classInput="textInput"
        />
      </div>
      <button
        disabled={isLoading}
        className={`${styles.addButton} ${isLoading && styles.sendingButton}`}
        type="submit"
      >
        {isLoading ? "Sending" : "Add task"}
      </button>
    </form>
  );
};

export default Form;

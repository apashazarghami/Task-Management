import styles from "./Modal.module.css";
import { useDispatch } from "react-redux";
import TextInput from "../form/TextInput";
import { useRef, useState } from "react";
import editTaskHandler from "../../utilities/editTaskHandler";
const Modal = ({ task, setEdit }) => {
  const { title, description } = task;
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dispatch = useDispatch();

  const clickHandler = () =>
    editTaskHandler({
      dispatch,
      task,
      setEdit,
      editedDescription,
      editedTitle,
      titleRef,
      descriptionRef,
    });

  return (
    <div className={styles.container}>
      <TextInput
        label="Title"
        value={editedTitle}
        setValue={setEditedTitle}
        ref={titleRef}
        id="editedTitle"
        classInput="editTextInput"
      />
      <TextInput
        label="Description"
        value={editedDescription}
        setValue={setEditedDescription}
        ref={descriptionRef}
        id="editedDescription"
        classInput="editTextInput"
      />
      <button className={styles.editButton} onClick={clickHandler}>
        Edit
      </button>
    </div>
  );
};

export default Modal;

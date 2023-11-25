import styles from './Modal.module.css';
import { useDispatch } from "react-redux";
import TextInput from "../form/TextInput";
import { useRef, useState } from "react";
import { editTask } from "../../redux/task/taskActions";
import { authenticationForm, notify } from '../../utilities/authenticationForm';
import { app } from '../../utilities/axios';
const Modal = ({ task, setEdit }) => {
    const { id, title, description, completed } = task;
    const [editedTitle, setEditedTitle] = useState(title)
    const [editedDescription, setEditedDescription] = useState(description)
    const titleRef = useRef()
    const descriptionRef = useRef();
    const dispatch = useDispatch();
    
    const editHandler = async () => {
        authenticationForm({ title: editedTitle, description: editedDescription, titleRef, descriptionRef })
        if(editedTitle.trim() && editedDescription.trim()) {
            await app.put(`api/tasks/${id}`, { id, title: editedTitle, description: editedDescription, completed})
            dispatch(editTask({ id, title: editedTitle, description: editedDescription }))
            notify('Your task editet successfully', 'success')
            setEdit(null)
        }
    }

    return(
        <div className={styles.container}>
            <TextInput label='Title' value={editedTitle} setValue={setEditedTitle} ref={titleRef} id='editedTitle' classInput='editTextInput' />
            <TextInput label='Description' value={editedDescription} setValue={setEditedDescription} ref={descriptionRef} id='editedDescription' classInput='editTextInput' />
            <button className={styles.editButton} onClick={editHandler}>Edit</button>
        </div>
    )
}

export default Modal;
import { useRef, useState } from 'react';
import styles from './Form.module.css';
import TextInput from './TextInput';
import { authenticationForm } from '../../utilities/authenticationForm';

const Form = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const titleRef = useRef();
    const descriptionRef = useRef();
    const addHandler = event => {
        event.preventDefault();
        authenticationForm({ title, description, titleRef, descriptionRef })
    }
    return(
        <form onSubmit={addHandler}>
            <h3 className={styles.title}>Add Task</h3>
            <div className={styles.TextInputContainer}>
                <TextInput label='Title' value={title} setValue={setTitle} ref={titleRef} />
                <TextInput label='Description' value={description} setValue={setDescription} ref={descriptionRef} />
            </div>
            <button className={styles.addButton} type='submit'>Add task</button>
        </form>
    )
}

export default Form
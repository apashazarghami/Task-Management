import { useState } from 'react';
import styles from './Form.module.css';
import TextInput from './TextInput';

const Form = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return(
        <form>
            <h3 className={styles.title}>Add Task</h3>
            <div className={styles.TextInputContainer}>
                <TextInput label='Title' value={title} setValue={setTitle} />
                <TextInput label='Description' value={description} setValue={setDescription} />
            </div>
            <button className={styles.addButton} type='submit'>Add task</button>
        </form>
    )
}

export default Form
import { useRef, useState } from 'react';
import styles from './Form.module.css';
import TextInput from './TextInput';
import { authenticationForm, notify } from '../../utilities/authenticationForm';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/task/taskActions';
import { app } from '../../utilities/axios';

const Form = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dispatch = useDispatch();
    
    const addHandler = async (event) => {
        event.preventDefault();
        authenticationForm({ title, description, titleRef, descriptionRef });
        if(title && description) {
            setIsLoading(true)
            const task = { id: Date.now(), title, description, completed: false };
            try {
                await app.post('api/tasks', task)
                dispatch(addTask(task))
                setTitle('')
                setDescription('');
                notify('Your task save successfully', 'success')
            } catch(err) {
                notify(err.message)
            } finally {
                setIsLoading(false)
            }
        } 
    }

    return(
        <form onSubmit={addHandler}>
            <h3 className={styles.title}>Add Task</h3>
            <div className={styles.TextInputContainer}>
                <TextInput label='Title' value={title} setValue={setTitle} ref={titleRef} />
                <TextInput label='Description' value={description} setValue={setDescription} ref={descriptionRef} />
            </div>
            <button disabled={isLoading} className={`${styles.addButton} ${isLoading && styles.sendingButton}`} type='submit'>{isLoading ? 'Sending' : 'Add task'}</button>
        </form>
    )
}

export default Form
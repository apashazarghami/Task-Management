import styles from './Tasks.module.css';
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { app } from '../../utilities/axios';
import { completeTask, removeTask } from '../../redux/task/taskActions';
import { useState } from 'react';
import Modal from '../modal/Modal';
import HeaderTasks from './HeaderTasks';

const Tasks = () => {
    const { tasks } = useSelector(state => state.task);
    const [edit, setEdit] = useState(null);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const removeHandler = async (id) => {
        await app.delete(`api/tasks/${id}`)
        dispatch(removeTask(id))
    }
    const completeHandler = async (task) => {
        const { id, title, description, completed } = task
        await app.put(`api/tasks/${id}`, { id, title, description, completed: !completed })
        dispatch(completeTask(id))
    }
    const filteredTasks = tasks.filter(task => task.title.trim().toLowerCase().includes(search.trim().toLowerCase()) || task.description.trim().toLowerCase().includes(search.trim().toLowerCase()))
    return(
        <>
            <HeaderTasks {...{ search, setSearch }} />
            <div className={`${styles.container} ${edit && styles.noneDisplay}`}>
                {
                    filteredTasks.map(task => {
                        return(
                            <div className={`${styles.taskContainer} ${task.completed && styles.completed}`} key={task.id}>
                                <div>
                                    <Link to={`/tasks/${task.id}`}>
                                        <h3 className={styles.title}>{task.title}</h3>
                                    </Link>
                                    <p>{task.description}</p>
                                </div>
                                <div>
                                    <MdOutlineModeEdit onClick={() => setEdit(task)} className={styles.icon} />
                                    <IoTrashOutline onClick={() => removeHandler(task.id)} className={styles.icon} />
                                    <input value={task.completed} onChange={() => completeHandler(task)} type='checkbox' checked={task.completed} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {edit && <Modal task={edit} setEdit={setEdit} />}
        </>
    )
}

export default Tasks
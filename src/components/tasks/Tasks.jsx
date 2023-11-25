import styles from './Tasks.module.css';
import { useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Tasks = () => {
    const { tasks } = useSelector(state => state.task);
    return(
        <div className={styles.container}>
            {
                tasks.map(task => {
                    return(
                        <div className={`${styles.taskContainer} ${task.completed && styles.completed}`} key={task.id}>
                            <div>
                                <Link to={`/tasks/${task.id}`}>
                                    <h3 className={styles.title}>{task.title}</h3>
                                </Link>
                                <p>{task.description}</p>
                            </div>
                            <div className={styles.iconContainer}>
                                <MdOutlineModeEdit className={styles.icon} />
                                <IoTrashOutline className={styles.icon} />
                                <input type='checkbox' className={styles.checkboxInput} checked={task.completed} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tasks
import styles from './Task.module.css';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Task = () => {
    const { tasks } = useSelector(state => state.task);
    const { id } = useParams();
    const task = tasks.find(task => String(task.id) === String(id))
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{task.title}</h2>
            <p className={styles.description}>{task.description}</p>
        </div>
    )
}

export default Task;
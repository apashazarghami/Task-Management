import styles from "./Task.module.css";
import { useParams } from "react-router-dom";
import { useSelectorHelper } from "../../hooks/useSelectorHelper";

const Task = () => {
  const { tasks } = useSelectorHelper();
  const { id } = useParams();
  const task = tasks.find((task) => String(task.id) === String(id));
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{task.title}</h2>
      <p className={styles.description}>{task.description}</p>
    </div>
  );
};

export default Task;

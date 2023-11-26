import { Link } from "react-router-dom";
import styles from "./TaskCell.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import completeTaskHandler from "../../utilities/completeTaskHandler";
import removeTaskHandler from "../../utilities/removeTaskHandler";
const TaskCell = ({ task, dispatch, setEdit }) => {
  const { id, completed, title, description } = task;

  const changeHandler = () => completeTaskHandler({ task, dispatch });

  const clickHandler = () => removeTaskHandler({ id, title, dispatch });

  return (
    <div
      className={`${styles.taskContainer} ${completed && styles.completed}`}
      key={id}
    >
      <div className={styles.data}>
        <Link to={`/tasks/${id}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.iconContainer}>
        <MdOutlineModeEdit
          onClick={() => setEdit(task)}
          className={styles.icon}
        />
        <IoTrashOutline onClick={clickHandler} className={styles.icon} />
        <input
          value={completed}
          onChange={changeHandler}
          type="checkbox"
          checked={completed}
        />
      </div>
    </div>
  );
};

export default TaskCell;

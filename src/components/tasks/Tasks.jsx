import styles from "./Tasks.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "../modal/Modal";
import HeaderTasks from "./HeaderTasks";
import { useSelectorHelper } from "../../hooks/useSelectorHelper";
import TaskCell from "./TaskCell";

const Tasks = () => {
  const { tasks } = useSelectorHelper();
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
      task.description
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase())
  );

  return (
    <>
      <HeaderTasks {...{ search, setSearch }} />
      <div className={styles.container}>
        {edit && <div className={styles.backdrop}></div>}
        {filteredTasks.map((task) => (
          <TaskCell {...{ task, dispatch, setEdit }} />
        ))}
      </div>
      {edit && <Modal task={edit} setEdit={setEdit} />}
    </>
  );
};

export default Tasks;

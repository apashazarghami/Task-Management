import styles from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  failureRequest,
  pendingRequest,
  successRequest,
} from "../../redux/task/taskActions";
import Loader from "../Loader/Loader";
import Error from "../error/Error";
import Form from "../form/form";
import Tasks from "../tasks/Tasks";
import { app } from "../../utilities/axios";
import { useSelectorHelper } from "../../hooks/useSelectorHelper";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelectorHelper();

  useEffect(() => {
    dispatch(pendingRequest());
    fetch('http://46.100.46.149:8069/api/tasks')
      .then(res => res.json())
      .then(data => dispatch(successRequest(data)))
      .catch(err => dispatch(failureRequest(err.message)))
    const fetchRequest = async () => {
      try {
        const { data } = await app.get("api/tasks");
        dispatch(successRequest(data));
      } catch (err) {
        dispatch(failureRequest(err.message));
      }
    };
    // fetchRequest();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Form />
          <Tasks />
        </>
      )}
    </div>
  );
};

export default Home;

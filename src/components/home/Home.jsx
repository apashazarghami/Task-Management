import styles from './Home.module.css';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { failureRequest, pendingRequest, successRequest } from "../../redux/task/taskActions";
import axios from 'axios';
import Loader from "../Loader/Loader";
import Error from "../error/Error";
import Form from '../form/form';
import Tasks from '../tasks/Tasks';
import { app } from '../../utilities/axios';

const Home = () => {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.task);

    useEffect(() => {
        const fetchRequest = async () => {
            dispatch(pendingRequest())
            try {
                const { data } = await app.get('api/tasks');
                dispatch(successRequest(data))
            } catch(err) {
                dispatch(failureRequest(err.message))
            }
        }
        fetchRequest()
    }, [])

    return(
        <div className={styles.container}>
            { isLoading ? <Loader /> : error ? <Error /> :
                <>
                    <Form />
                    <Tasks />
                </> 
            }
        </div>
    )
}

export { app }

export default Home
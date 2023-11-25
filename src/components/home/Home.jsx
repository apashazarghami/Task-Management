import styles from './Home.module.css';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { failureRequest, pendingRequest, successRequest } from "../../redux/task/taskActions";
import axios from 'axios';
import Loader from "../Loader/Loader";
import Error from "../error/Error";
import Form from '../form/form';

const Home = () => {
    const dispatch = useDispatch();
    const { isLoading, tasks, error } = useSelector(state => state.task)
    const app = axios.create({
        baseURL: 'http://46.100.46.149:8069/'
    })

    useEffect(() => {
        const fetchRequest = async () => {
            dispatch(pendingRequest())
            try {
                const { data } = await app.get('api/tasks');
                dispatch(successRequest(data))
            } catch(err) {
                console.log(err)
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
                </> 
            }
        </div>
    )
}

export default Home
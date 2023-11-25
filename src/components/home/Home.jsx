import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { failureRequest, pendingRequest, successRequest } from "../../redux/task/taskActions";
import axios from 'axios';
import Loader from "../Loader/Loader";

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
                dispatch(failureRequest(err.message))
            }
        }
        fetchRequest()
    }, [])

    return(
        <div>
            { isLoading && <Loader />}
        </div>
    )
}

export default Home
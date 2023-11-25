import styles from './Error.module.css';
import { useSelector } from "react-redux"

const Error = () => {
    const { error } = useSelector(state => state.task)
    return(
        <div className={styles.container}>
            <h3>{error}</h3>
        </div>
    )
}

export default Error
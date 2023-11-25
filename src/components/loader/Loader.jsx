import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css'

const Loader = () => {
    return(
        <div className={styles.container}>
            <RotatingLines
                strokeColor="#455d7a"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}

export default Loader
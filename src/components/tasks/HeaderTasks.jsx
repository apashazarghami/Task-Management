import { useEffect, useState } from 'react';
import TextInput from '../form/TextInput';
import styles from './HeaderTasks.module.css';
import { useDispatch } from 'react-redux';
import { sortTask } from '../../redux/task/taskActions';

const HeaderTasks = ({ search, setSearch }) => {
    const [selected, setSelected] = useState('UNCOMPLETED');
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(sortTask(selected))
        }, 500)
    }, []) 
    useEffect(() => {
        dispatch(sortTask(selected))
    }, [dispatch, selected])
    const sortedHandler = event => setSelected(event.target.value);
    return(
        <div className={styles.container}>
            <TextInput label='Search task' value={search} setValue={setSearch} id='search' classInput='textInput' />
            <div className={styles.selectContainer}>
                <label className={styles.labelSort}>Sort by</label>
                <select className={styles.selectItems} value={selected} onChange={sortedHandler}>
                    <option value='UNCOMPLETED'>Uncompleted</option>
                    <option value='COMPLETED'>Completed</option>
                </select>
            </div>
        </div>
    )
}

export default HeaderTasks;
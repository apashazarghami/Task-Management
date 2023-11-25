import { forwardRef } from 'react';
import styles from './TextInput.module.css';

const TextInput = forwardRef(({ label, value, setValue, id, classInput }, ref) => {
    const changeHandler = event => setValue(event.target.value)
    return(
        <div className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <input className={styles[classInput]} id={id} type="text" value={value} onChange={changeHandler} ref={ref}  />
        </div>
    )
})

export default TextInput;
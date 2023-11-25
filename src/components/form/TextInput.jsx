import { forwardRef } from 'react';
import styles from './TextInput.module.css';

const TextInput = forwardRef(({ label, value, setValue }, ref) => {
    const changeHandler = event => setValue(event.target.value)
    return(
        <div className={styles.container}>
            <label htmlFor={label.toLowerCase()}>{label}</label>
            <input className={styles.textInput} id={label.toLowerCase()} type="text" value={value} onChange={changeHandler} ref={ref}  />
        </div>
    )
})

export default TextInput;
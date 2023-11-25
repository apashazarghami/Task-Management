import styles from './TextInput.module.css';

const TextInput = ({ label, value, setValue }) => {
    const changeHandler = event => setValue(event.target.value)
    return(
        <div className={styles.container}>
            <label htmlFor={label.toLowerCase()}>{label}</label>
            <input className={styles.textInput} id={label.toLowerCase()} type="text" value={value} onChange={changeHandler}  />
        </div>
    )
}

export default TextInput;
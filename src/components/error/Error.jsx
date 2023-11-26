import styles from "./Error.module.css";
import { useSelectorHelper } from "../../hooks/useSelectorHelper";

const Error = () => {
  const { error } = useSelectorHelper();
  return (
    <div className={styles.container}>
      <h3>{error}</h3>
    </div>
  );
};

export default Error;

import styles from './Header.module.css';
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Header = () => {
    const navigate = useNavigate();
    return(
        <div className={styles.container}>
            <Link className={styles.homeLink} to='/'>Home</Link>
            <IoMdArrowRoundBack onClick={() => navigate(-1)} className={styles.backArrow} />
        </div>
    )
}

export default Header
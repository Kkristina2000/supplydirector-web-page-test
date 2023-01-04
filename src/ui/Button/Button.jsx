import styles from "./Button.module.scss";

const Button = ({ text }) => {

    return (
        <div>
            <button className={styles.button}>{text}</button>
        </div>
    )
}

export default Button;

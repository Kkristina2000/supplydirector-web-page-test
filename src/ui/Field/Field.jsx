import styles from './Field.module.scss';

const Field = ({ label, value, onChange, type }) => {

    return (
        <div className={styles.field}>
            <label>
                {label}
            </label>
            <input
                className={styles.input}
                placeholder=''
                value={value}
                onChange={onChange}
                type={type}
            // onClick={onClick}
            />
        </div>
    )
}

export default Field;
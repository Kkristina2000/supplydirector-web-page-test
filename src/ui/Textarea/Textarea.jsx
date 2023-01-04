import styles from './Textarea.module.scss';

const Textarea = ({ label, value, onChange }) => {

    return (
        <div className={styles.textarea}>
            <label>{label}</label>
            <textarea value={value} onChange={onChange} />
        </div>
    )
}

export default Textarea;

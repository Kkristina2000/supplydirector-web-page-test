import styles from './Range.module.scss';

const Range = ({ min, max, step }) => {

    return (
        <input type='range' className={styles.range} min={min} max={max} step={step} />
    )
}

export default Range;

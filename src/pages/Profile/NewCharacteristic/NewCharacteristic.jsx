import Field from '../../../ui/Field/Field';
import Select from '../../../ui/Select/Select';
import Button from '../../../ui/Button/Button';

import styles from './NewCharacteristic.module.scss';

const NewCharacteristic = ({ active, setActive }) => {

    return (
        <div className={styles.modal} onClick={() => setActive(true)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <Field type='text' label='Название товара' required />
                <Select placeholder="Формат поля" title='Формат поля' />
                <Button text='Добавить поле' />
            </div>
        </div>
    )
}

export default NewCharacteristic;
import { useState } from 'react';

// import NewCharacteristic from "./NewCharacteristic/NewCharacteristic";

import Field from "../../ui/Field/Field";
import Select from "../../ui/Select/Select";
import Textarea from '../../ui/Textarea/Textarea';
import Range from "../../ui/Range/Range";
import Button from "../../ui/Button/Button";

import addImage from '../../images/plus.svg';
import documentImage from '../../images/document.svg';
import photoImage from '../../images/photo.svg';
import styles from "./styles.module.scss";

const Profile = () => {
    const [name, setName] = useState('');
    // const [modalActive, setModalActive] = useState(false);
    const [description, setDescription] = useState('');
    const [price_from, setPrice_from] = useState('');
    const [price_up_to, setPrice_up_to] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
    };

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.heading}>Создание запроса</h1>
                <div className={styles.wrapperFields}>
                    <Field type='text' label='Название товара' value={name} onChange={e => setName(e.target.value)} required />
                    <Select placeholder="Категория" title='Категория' />
                </div>
                <div className={styles.characteristic}>
                    <img src={addImage} alt="Добавить характеристику" className={styles.icon} />
                    <Field type='button' value='Добавить поле характеристик' />
                    {/* onClick={()=>setModalActive(true)} */}
                    {/* <NewCharacteristic active={modalActive} setActive={setModalActive}/> */}
                </div>
                <Textarea label='Подробное описание товара' value={description} onChange={e => setDescription(e.target.value)} required />
                <div className={styles.wrapperFields}>
                    <div className={styles.price}>
                        <Range min='10000' max='220000' />
                        <div className={styles.wrapperFields__column}>
                            <Field type='number' label='Цена от' value={price_from} onChange={e => setPrice_from(e.target.value)} required />
                            <Field type='number' label='Цена до' value={price_up_to} onChange={e => setPrice_up_to(e.target.value)} required />
                        </div>
                    </div>
                    <div className={styles.wrapperFields__column}>
                        <Field type='date' label='Дата получения' value={date} onChange={e => setDate(e.target.value)} required />
                        <Field type='number' label='Желаемое количество' value={amount} onChange={e => setAmount(e.target.value)} required />
                    </div>
                </div>
                <div className={styles.wrapperFields}>
                    <Field type='text' label='Адрес доставки' value={address} onChange={e => setAddress(e.target.value)} required />
                    <Select placeholder="Cостояние" title='Cостояние' />
                </div>
               <div className={styles.wrapperFields}>
                    <Button text='Создать запрос' />
                    <div className={styles.wrapperFields__column}>
                        <div>
                            <img src={documentImage} alt="Загрузить документ" className={styles.icon} />
                            <Field type='file' label='Загрузить документ' />
                        </div>
                        <div>
                            <img src={photoImage} alt="Загрузить фото" className={styles.icon} />
                            <Field type='file' label='Загрузить фото' multiple accept='image/*' />
                        </div>
                    </div>
                </div>
            </form>
        </div>)
}

export default Profile;

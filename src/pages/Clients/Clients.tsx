import React, {useState} from 'react';
import cl from './Clients.module.sass'
import {ButtonAdd} from "../../components/Button/ButtonAdd";
import {AddClientModal} from "../../components/AddClientModal/AddClientModal";
import {ClientTR} from "../../components/ClientTableRow/ClientTR";




export const Clients = () => {

    const [modalClientAdd, setModalClientAdd] = useState(false)

    return (
        <>
            <div className={cl.tableInfo}>
                <table className={cl.tableMain}>
                    <thead>
                        <th>ФИО</th>
                        <th>Остаток на балансе</th>
                        <th>Номер карты</th>
                    </thead>
                    {/*здесь нужно делать запрос к бд, чтобы получить name, points, numberCard*/}
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556}/>
                </table>
            </div>
            <ButtonAdd width={358} onClick={() => setModalClientAdd(true)}>Добавить пользователя</ButtonAdd>
            <AddClientModal modalClientAdd={modalClientAdd}
                            closeModal={() => setModalClientAdd(false)}/>
        </>
    );
};



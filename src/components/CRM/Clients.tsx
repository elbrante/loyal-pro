import React, { useEffect, useState } from 'react';
import cl from './Clients.module.sass'
import { ButtonAdd } from "./Button/ButtonAdd";
import { AddClientModal } from "./AddClientModal/AddClientModal";
import { ClientTR } from "./ClientTableRow/ClientTR";
import axios from '../../api/axios';

const GET_CLIENTS = '/api/v1/admin/clients';

export const Clients = () => {

    const [modalClientAdd, setModalClientAdd] = useState(false);
    const [clientsList, setClientsList] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get(GET_CLIENTS, {
                headers: {
                    'Authorization': `Token ${localStorage.getItem('Token')}`,
                    'Access-Control-Allow-Origin': '*'
                }
            })
        } catch (err) {

        }
    };

    useEffect(() => {

    }, []);

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

                    <ClientTR name={'Иванов Иван Иванович'} points={1000} numberCard={2231334599872556} />
                </table>
            </div>
            <ButtonAdd width={358} onClick={() => setModalClientAdd(true)}>Добавить пользователя</ButtonAdd>
            <AddClientModal modalClientAdd={modalClientAdd}
                closeModal={() => setModalClientAdd(false)} />
        </>
    );
};



import React, {useState} from 'react';
import cl from './ClientTR.module.sass'
import {ClientModal} from "../ClientModal/ClientModal";

interface Props {
    name: string
    points: number
    numberCard: number
}
//здесь нужно делать запрос к бд, чтобы получить gender, phone, instLink,


export const ClientTR = ({name, points, numberCard}: Props) => {

    const [clientModal, setClientModal] = useState(false)


    return (
        <tr onClick={() => setClientModal(true)} className={cl.tableRow}>
            <td>{name}</td>
            <td>{points}</td>
            <td>{numberCard}</td>
            <ClientModal clientModal={clientModal}
                         closeModal={() => setClientModal(false)}
                         name={name}
                         gender={'мужской'}
                         points={points}
                         phone={88888888888}
                         instLink={'inst'}
            />
        </tr>
    );
};


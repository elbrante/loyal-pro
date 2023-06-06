import React from 'react';
import Modal from "react-modal";
import cl from "./ClientModal.module.sass";
import balance from '../../asserts/balance.svg'
import phoneClient from '../../asserts/phoneClient.svg'
import inst from '../../asserts/inst.svg'
import {ButtonAdd} from "../Button/ButtonAdd";

interface Props {
    clientModal: boolean
    closeModal: () => void

    name: string
    gender: string
    points: number
    phone: number
    instLink: string
}



export const ClientModal = ({clientModal, closeModal, name, gender, points, phone, instLink}: Props) => {
    return (
        <Modal
            isOpen={clientModal}
            overlayClassName={cl.overlay}
            className={cl.modalClient}
            onRequestClose={closeModal}
        >
            <div className={cl.mainWrapper}>
                <div className={cl.infoClient}>
                    <div className={cl.item1}>
                        <span className={cl.name}>{name}</span>
                        <span>Пол: {gender}</span>
                    </div>
                    <div className={cl.line}></div>

                    <div className={cl.info}>
                        <img src={balance} alt=""/>
                        <span>
                            Баланс: {points}
                        </span>
                    </div>
                    <div className={cl.info}>
                        <img src={phoneClient} alt=""/>
                        <span>
                            Номер телефона: {phone}
                        </span>
                    </div>
                    <div className={cl.info}>
                        <img src={inst} alt=""/>
                        <span>
                            Инстаграм: @{instLink}
                        </span>
                    </div>
                </div>
                <div className={cl.groupButton}>
                    <input className={cl.addPoints} placeholder={'Добавить баллы'}/>
                    <ButtonAdd width={245}>Добавить</ButtonAdd>
                </div>
            </div>
        </Modal>
    );
};


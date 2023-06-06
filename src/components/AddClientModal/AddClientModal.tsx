import React from 'react';
import Modal from 'react-modal'
import cl from "./AddClientModal.module.sass";
import {Input} from "../../pages/MainStartPage/Input/Input";
import {ButtonAdd} from "../Button/ButtonAdd";
import login from '../../asserts/login.svg';
import phone from '../../asserts/phone.svg';
import calendar from '../../asserts/calendar.svg';


interface Props {
    modalClientAdd: boolean;
    closeModal: () => void;
}

export const AddClientModal = ({modalClientAdd, closeModal}: Props) => {
    return (
        <Modal
            isOpen={modalClientAdd}
            overlayClassName={cl.overlay}
            className={cl.modalAddClient}
            onRequestClose={closeModal}
        >
            <div className={cl.formAdd}>
                <div className={cl.formGroup}>
                    <div className={cl.groupInputs}>
                        <div className={cl.inputImg}>
                            <img className={cl.image} src={login} alt=''/>
                            <Input colorText='CRM' placeholder={'Имя'}/>
                        </div>
                        <div className={cl.inputImg}>
                            <img className={cl.image} src={phone} alt=''/>
                            <Input colorText='CRM' placeholder={'Номер телефона'}/>
                        </div>
                        <div className={cl.inputImg}>
                            <img className={cl.image} src={calendar} alt=''/>
                            <Input colorText='CRM' placeholder={'Дата рождения'}/>
                        </div>
                    </div>

                    <div className={cl.checkGroup}>

                    </div>


                </div>
                <ButtonAdd width={260}>Добавить</ButtonAdd>
            </div>

        </Modal>
    );
};


import React from 'react';
import cl from "./Auth.module.sass";
import {Button} from "../ButtonComponent/Button";
import imgReg from "../../../asserts/imgReg.svg";
import Modal from "react-modal";
import {Input} from "../Input/Input";


interface AuthProps {
    modalAuth: boolean
    closeModal: () => void
}

export const Auth = ({modalAuth, closeModal}: AuthProps) => {
    return (
        <Modal
            isOpen={modalAuth}
            overlayClassName={cl.overlay}
            className={cl.modalReg}
            onRequestClose={closeModal}
        >
            <div className={cl.formReg}>
                <span>Зарегистрируйтесь</span>
                <Input placeholder='Логин'/>
                <Input type="password" placeholder="Пароль"/>
                <Button type={'AUTH'} nameButton={'Зарегистрироваться'}/>
            </div>
            <div className={cl.imgReg}>
                <img src={imgReg} alt={'x'}/>
            </div>
        </Modal>
    );
};


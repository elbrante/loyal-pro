import React from 'react';
import cl from "./Auth.module.sass";
import {Button} from "../ButtonComponent/Button";
import imgReg from "../../../asserts/imgReg.svg";
import Modal from "react-modal";
import {Input} from "../Input/Input";
import loginIcon from '../../../asserts/loginIcon.svg'
import passwordIcon from '../../../asserts/passwordIcon.svg'

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

                {/*В компонентах Auth и Login есть небольшие проблемы с иконками(нужно задать вопрос к куратору)*/}
                <div className={cl.inputWithImg}>
                    <img src={loginIcon} alt={'Иконка логина'}/>
                    <Input placeholder='Логин'/>
                </div>

                <div className={cl.inputWithImg}>
                    <img src={passwordIcon} alt={'Иконка ввода пароля'}/>
                    <Input type="password" placeholder="Пароль"/>
                </div>

                <Button type={'AUTH'}>
                    Зарегистрироваться
                </Button>
            </div>
            <div className={cl.imgReg}>
                <img src={imgReg} alt={'x'}/>
            </div>
        </Modal>
    );
};


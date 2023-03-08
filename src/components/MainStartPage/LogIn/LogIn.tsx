import React from 'react';
import cl from "../LogIn/LogIn.module.sass";
import {Input} from "../Input/Input";
import {Button} from "../ButtonComponent/Button";
import Modal from 'react-modal'



interface LoginProps {
    modalLogin: boolean;
    closeModal: () => void;
}


export const LogIn = ({modalLogin, closeModal}: LoginProps) => {
    return (
        <Modal
            isOpen={modalLogin}
            overlayClassName={cl.overlay}
            className={cl.modalLog}
            onRequestClose={closeModal}
        >
            <div className={cl.formLog}>
                <span className={cl.loginText}>Войдите в аккаунт</span>
                <Input placeholder='Логин'/>
                <Input placeholder='Пароль' type='password'/>
                <div className={cl.underInput}>
                    <div className={cl.checkBox}>
                        <input type={"checkbox"}/>
                        <span>Запомнить меня</span>
                    </div>
                    <span>Забыли пароль?</span>
                </div>
                <Button nameButton={'Войти'} type={'LOGIN'}/>
                <div className={cl.underButton}>
                    <span className={cl.ask}>Еще нет аккаунта?</span>
                    <span className={cl.offerReg}>Зарегистрируйтесь!</span>
                </div>
            </div>
        </Modal>
    );
};


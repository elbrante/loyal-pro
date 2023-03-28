import React from 'react';
import cl from "../LogIn/LogIn.module.sass";
import {Input} from "../Input/Input";
import {Button} from "../ButtonComponent/Button";
import Modal from 'react-modal'
import loginIcon from "../../../asserts/loginIcon.svg";
import passwordIcon from "../../../asserts/passwordIcon.svg";




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

                {/*В компонентах Auth и Login есть небольшие проблемы с иконками(нужно задать вопрос к куратору)*/}
                <div className={cl.inputWithImg}>
                    <img src={loginIcon} alt={'Иконка логина'}/>
                    <Input colorText='MAIN' placeholder='Логин'/>
                </div>
                <div className={cl.inputWithImg}>
                    <img src={passwordIcon} alt={'Иконка ввода пароля'}/>
                    <Input colorText='MAIN' type="password" placeholder="Пароль"/>
                </div>

                <div className={cl.underInput}>
                    <div className={cl.checkBox}>
                        <input type={"checkbox"}/>
                        <span>Запомнить меня</span>
                    </div>
                    <span>Забыли пароль?</span>
                </div>

                <Button type={'LOGIN'}>
                    Войти
                </Button>
                <div className={cl.underButton}>
                    <span className={cl.ask}>Еще нет аккаунта?</span>
                    <span className={cl.offerReg}>Зарегистрируйтесь!</span>
                </div>
            </div>
        </Modal>
    );
};


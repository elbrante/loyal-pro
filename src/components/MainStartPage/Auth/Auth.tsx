import React, { useState } from 'react';
import cl from "./Auth.module.sass";
import { Button } from "../ButtonComponent/Button";
import imgReg from "../../../asserts/imgReg.svg";
import Modal from "react-modal";
import { Input } from "../Input/Input";
import loginIcon from '../../../asserts/loginIcon.svg'
import passwordIcon from '../../../asserts/passwordIcon.svg';
import axios from '../../../api/axios';

const REGISTER_URL = '/authservice/api/v1/auth/users';

interface AuthProps {
    modalAuth: boolean
    closeModal: () => void
}

export const Auth = ({ modalAuth, closeModal }: AuthProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post(REGISTER_URL, { username: username, password: password });
            localStorage.setItem('token', response?.data.auth_token);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <Modal
            isOpen={modalAuth}
            overlayClassName={cl.overlay}
            className={cl.modalReg}
            onRequestClose={closeModal}
        >
            <div className={cl.formReg}>
                <span>Зарегистрируйтесь</span>
                {error && <p className={cl.formErr}>{error}</p>}
                <div className={cl.inputWithImg}>
                    <img src={loginIcon} alt={'Иконка логина'} />
                    <Input colorText='MAIN' placeholder='Логин' state={setUsername} />
                </div>

                <div className={cl.inputWithImg}>
                    <img src={passwordIcon} alt={'Иконка ввода пароля'} />
                    <Input colorText='MAIN' type="password" placeholder="Пароль" state={setPassword} />
                </div>

                <Button type={'AUTH'} onClick={handleRegister}>
                    Зарегистрироваться
                </Button>
            </div>
            <div className={cl.imgReg}>
                <img src={imgReg} alt={'x'} />
            </div>
        </Modal>
    );
};


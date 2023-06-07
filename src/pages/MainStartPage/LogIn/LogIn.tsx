import { useState } from 'react';
import cl from "./LogIn.module.sass";
import { Input } from "../Input/Input";
import { Button } from "../ButtonComponent/Button";
import Modal from 'react-modal'
import loginIcon from "../../../asserts/loginIcon.svg";
import passwordIcon from "../../../asserts/passwordIcon.svg";
import axios from '../../../api/axios';
import { useNavigate } from 'react-router-dom';



const LOGIN_URL = '/authservice/auth/token/login/';

interface LoginProps {
    modalLogin: boolean;
    closeModal: () => void;
}

export const LogIn = ({ modalLogin, closeModal }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSend = async () => {
        try {
            // const response = await axios.post(LOGIN_URL, { username: username, password: password });
            // localStorage.setItem('Token', response?.data.auth_token);
            localStorage.setItem('Token', 'jfhsdkjbhsdkjfbhsd');
            navigate('/crm/clients');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <Modal
            isOpen={modalLogin}
            overlayClassName={cl.overlay}
            className={cl.modalLog}
            onRequestClose={closeModal}
        >
            <div className={cl.formLog}>
                <span className={cl.loginText}>Войдите в аккаунт</span>
                {error && <p className={cl.formErr}>{error}</p>}
                {/*В компонентах Auth и Login есть небольшие проблемы с иконками(нужно задать вопрос к куратору)*/}
                <div className={cl.inputWithImg}>
                    <img src={loginIcon} alt={'Иконка логина'} />
                    <Input colorText='MAIN' placeholder='Логин' state={setUsername} />
                </div>
                <div className={cl.inputWithImg}>
                    <img src={passwordIcon} alt={'Иконка ввода пароля'} />
                    <Input colorText='MAIN' type="password" placeholder="Пароль" state={setPassword} />
                </div>

                <div className={cl.underInput}>
                    <div className={cl.checkBox}>
                        <input type={"checkbox"} />
                        <span>Запомнить меня</span>
                    </div>
                    <span>Забыли пароль?</span>
                </div>

                <Button type={'LOGIN'} onClick={handleSend}>
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
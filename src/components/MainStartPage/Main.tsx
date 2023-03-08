import React, {useState} from 'react';
import cl from "./Main.module.sass"
import {Button} from "./ButtonComponent/Button";
import imageMain from "../../asserts/imageMain.png"
import {Circle} from "./CircleComponent/Circle";
import imgReg from '../../asserts/imgReg.svg'
import Modal from "react-modal"
import {Auth} from "./Auth/Auth";
import {Input} from "./Input/Input";
import {LogIn} from "./LogIn/LogIn";

export const Main = () => {

    const [modalAuth, setModalAuth] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)


    return (
        <main className={cl.main}>
            <div className={cl.mainInfo}>
                <div className={cl.desc}>

                    <span className={cl.descInfoBig}>
                        Эффективная система для управления бизнесом
                    </span>

                    <span className={cl.descInfoLittle}>
                        Привлекайте клиентов, увеличивайте прибыль,
                        и управляйте большими системами
                    </span>

                    <div className={cl.buttonGroupOne}>
                        <Button onClick={() => setModalAuth(true)} type={'MAIN'} nameButton={'Зарегистрироваться'}/>
                        <Button onClick={() => setModalLogin(true)} type={'MAIN'} nameButton={'Войти как клиент'}/>
                    </div>

                    <div className={cl.businessTypes}>
                        <Circle forWhat={'Для ИП'}/>
                        <Circle forWhat={'Для малого бизнеса'}/>
                        <Circle forWhat={'Для крупного бизнеса'}/>
                    </div>
                </div>
            </div>
            <img src={imageMain} alt="" className={cl.imageMain}/>
            <Auth modalAuth={modalAuth} closeModal={() => setModalAuth(false)}/>
            <LogIn modalLogin={modalLogin} closeModal={() => setModalLogin(false)}/>
        </main>
    );
};


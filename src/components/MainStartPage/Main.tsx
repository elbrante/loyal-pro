import React, {useState} from 'react';
import cl from "./Main.module.sass"
import {Button} from "./ButtonComponent/Button";
import imageMain from "../../asserts/imageMain.png"
import {Circle} from "./CircleComponent/Circle";
import {Auth} from "./Auth/Auth";
import {LogIn} from "./LogIn/LogIn";
import {Header} from "./Header/Header";

export const Main = () => {

    const [modalAuth, setModalAuth] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)


    return (
        <div className={cl.mainApp}>
            <main className={cl.main}>
                <Header/>
                <div className={cl.underHeader}>
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
                                <Button onClick={() => setModalAuth(true)} type={'MAIN'}>
                                    Зарегистрироваться
                                </Button>

                                <Button onClick={() => setModalLogin(true)} type={'MAIN'}>
                                    Войти как клиент
                                </Button>
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
                </div>
            </main>
        </div>
    );
};


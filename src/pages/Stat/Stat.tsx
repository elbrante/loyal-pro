import React from 'react';
import cl from './Stat.module.sass';
import { Histogram } from '../../components/Hystogram/Hystogram';

export const Stat = () => {
    return (
        <div className={cl.wrapper1}>
            <div className={cl.graphAge}>
                <span className={cl.title}>График по возрасту</span>
            </div>
            <div className={cl.histogram}>
                <Histogram />
            </div>
            <div className={cl.wrapper2}>
                <div className={cl.gistElement}>
                    <div className={cl.wrapper3}>
                        <span className={cl.titleInfo}>Всего клиентов</span>
                        <span className={cl.numberInfo}>500</span>
                    </div>
                </div>
                <div className={cl.gistElement}>
                    <div className={cl.wrapper3}>
                        <span className={cl.titleInfo}>Мужчин</span>
                        <span className={cl.numberInfo}>310</span>
                    </div>
                </div>
                <div className={cl.gistElement}>
                    <div className={cl.wrapper3}>
                        <span className={cl.titleInfo}>Женщин</span>
                        <span className={cl.numberInfo}>190</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

{/* <div className={cl.wrapperGraph}>
                    <div className={cl.graphElement}>
                        <span>0-18</span>
                        <div>ЗДЕСЬ ГИСТОГРАММА</div>
                    </div>
                    <div className={cl.graphElement}>
                        <span>18-24</span>
                        <div>ЗДЕСЬ ГИСТОГРАММА</div>
                    </div>
                    <div className={cl.graphElement}>
                        <span>25-31</span>
                        <div>ЗДЕСЬ ГИСТОГРАММА</div>
                    </div>
                    <div className={cl.graphElement}>
                        <span>32-38</span>
                        <div>ЗДЕСЬ ГИСТОГРАММА</div>
                    </div>
                    <div className={cl.graphElement}>
                        <span>39-45</span>
                        <div>ЗДЕСЬ ГИСТОГРАММА</div>
                    </div>
                    <div className={cl.graphElement}>
                        <span>46-52</span>
                        <div>ЗДЕСЬ ГИСТОГРАММА</div>
                    </div>
                    <div className={cl.graphElement}>
                        <span>53+</span>
                        <div>ЗДЕСЬ ГИСТОГРАММА</div>
                    </div>
                </div> */}
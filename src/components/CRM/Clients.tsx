import React from 'react';
import cl from './Clients.module.sass'


export const Clients = () => {
    return (
        <div className={cl.mainCRM}>
            <div className={cl.mainTable}>
                <div className={cl.tableInfo}>
                    <div className={cl.table}>
                    <table>
                        <tr>
                            <th>ФИО</th>
                            <th>Остаток на балансе</th>
                            <th>Номер карты</th>
                        </tr>
                        <tr>
                            <td>Иванов Иван Иванович</td>
                            <td>1000</td>
                            <td>2231 3345 9987 2556</td>
                        </tr>
                        <tr>
                            <td>Петров Петр Алексеевич</td>
                            <td>1000</td>
                            <td>2231 3345 9987 2556</td>
                        </tr>
                        <tr>
                            <td>Мерковф Игорь Андреевич</td>
                            <td>1000</td>
                            <td>2231 3345 9987 2556</td>
                        </tr>
                        <tr>
                            <td>Мерковф Игорь Андреевич</td>
                            <td>1000</td>
                            <td>2231 3345 9987 2556</td>
                        </tr>
                        <tr>
                            <td>Мерковф Игорь Андреевич</td>
                            <td>1000</td>
                            <td>2231 3345 9987 2556</td>
                        </tr>
                        <tr>
                            <td>Мерковф Игорь Андреевич</td>
                            <td>1000</td>
                            <td>2231 3345 9987 2556</td>
                        </tr>
                        <tr>
                            <td>Мерковф Игорь Андреевич</td>
                            <td>1000</td>
                            <td>2231 3345 9987 2556</td>
                        </tr>
                        <tr>
                            <td>Мерковф Игорь Андреевич</td>
                            <td>1000</td>
                            <td>2231 3345 9987 2556</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


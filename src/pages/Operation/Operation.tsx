import React from 'react';
import cl from "./Operation.module.sass";
import {OperationTR} from "../../components/OperationTableRow/OperationTR";


export const Operation = () => {
    return (
            <div className={cl.wrapper1}>
                <table className={cl.tableMain}>
                    <thead>
                        <th>Дата операции</th>
                        <th>Всего чеков</th>
                        <th>Чеков по программе</th>
                        <th>Сумма чеков по программе</th>
                        <th>Новые клиенты</th>
                        <th>Лояльные клиенты</th>
                    </thead>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>
                    <OperationTR dataOperation={'1.01.2023'}
                                 totalReceipts={1}
                                 receiptProgram={1}
                                 sumReceiptProgram={1000}
                                 newClients={10}
                                 loyalClients={10}/>



                </table>
            </div>

    );
};


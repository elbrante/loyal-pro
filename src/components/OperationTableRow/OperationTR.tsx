import React from 'react';
import cl from './OperationTR.module.sass'

interface Props {
    dataOperation: string
    totalReceipts: number
    receiptProgram: number
    sumReceiptProgram: number
    newClients: number
    loyalClients: number
}




export const OperationTR = ({dataOperation,
                                totalReceipts,
                                receiptProgram,
                                sumReceiptProgram,
                                newClients,
                                loyalClients}: Props) => {
    return (
        <tr className={cl.tableRow}>
            <td>{dataOperation}</td>
            <td>{totalReceipts}</td>
            <td>{receiptProgram}</td>
            <td>{sumReceiptProgram}</td>
            <td>{newClients}</td>
            <td>{loyalClients}</td>
        </tr>
    );
};


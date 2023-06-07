import React from 'react';
import cl from "../SourceTableRow/SourceTableRow.module.sass";


interface Props {
    desc: string
    dataCreate: string
    source: string
    link: string
}

export const SourceTableRow = ({desc,
                                   dataCreate,
                                   source,
                                   link}: Props) => {
    return (
        <tr className={cl.tableRow}>
            <td>{desc}</td>
            <td>{dataCreate}</td>
            <td>{source}</td>
            <td>{link}</td>
        </tr>
    );
};


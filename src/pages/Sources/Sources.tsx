import React from 'react';
import cl from './Sources.module.sass'
import {SourceTableRow} from "../../components/SourceTableRow/SourseTableRow";

export const Sources = () => {
    return (
        <div className={cl.wrapper1}>
            <table>
                <thead>
                    <th>Описание</th>
                    <th>Дата создания</th>
                    <th>Источник</th>
                    <th>Ссылка</th>
                </thead>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
                <SourceTableRow desc={'link'} dataCreate={'01.01.2023'} source={'google'} link={'google.com'}/>
            </table>
        </div>
    );
};

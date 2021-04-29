import React, { useState } from "react";
import Row from './row';
export default function Table({records, setRecords}) {
    const recordsTable = records.map((record, index)=>{
        return(
            <Row records={records} record={record} index={index} setRecords={setRecords}/>
        )
    })
    return (
        <section>
        <table>
            {recordsTable}
        </table>
        </section>
      );
}
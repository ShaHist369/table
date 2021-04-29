import React, { useState } from "react";
export default function Row({records, record, index, setRecords}) {
    const [text, setText] = useState('')
    const [isChangeMode, setChangeMode] = useState(false)
    const deleteRecord = (i) => setRecords(records.filter((record, index)=> index !== i));
    const changeRecord = (i) => setChangeMode(true);
    const changeText = (e) => setText(e.target.value)
    const confirmChange = (i) => {
        setChangeMode(false); 
        setRecords([...records.map((record, index)=> {
            if(index === i){
                return text
            }else{
                return record
            }
        } )])
        }
    return (
        <tr key={index}>
            {isChangeMode?<input onChange={(e)=>changeText(e)}/>:<td>{record}</td>}
           <td><button onClick={()=>deleteRecord(index)}>delete</button></td>
           {isChangeMode
            ?<td><button onClick={()=>confirmChange(index)}>confirm</button></td>
            :<td><button onClick={changeRecord}>change</button></td>}
        </tr>
      );
}
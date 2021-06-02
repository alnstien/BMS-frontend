import React from 'react';


export default function ListItem({list}){

    
    return(
        <>
            <tr className="tb-tr">
                <td>{list.id}</td>
                <td>{list.date}</td>
                <td>{list.resident}</td>
                <td>{list.request}</td>
                <td style={{color: list.status==='Served' ? 'green' :'red'}}>{list.status}</td>
                <td>{list.Or}</td>
            </tr>
        </>
    )
}
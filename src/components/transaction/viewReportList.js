import React,{useCallback,useState} from 'react';
import {Link} from 'react-router-dom'

export default function ListItem({list}){

    
    return(
        <>
            <tr className="tb-tr">
                <td>{list.id}</td>
                <td>{list.resident}</td>
                <td>{list.request}</td>
                <td>{list.status}</td>
                <td>{list.Or}</td>
            </tr>
        </>
    )
}
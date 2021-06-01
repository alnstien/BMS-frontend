import React,{useCallback,useState} from 'react';
import {Link} from 'react-router-dom'

export default function ListItem({list}){
    
    return(
        <>
            <tr className="tb-tr">
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.role}</td>
                <td>
                    <Link className="process-btn" to='/records/residents/view' >View</Link>
                </td>
            </tr>
        </>
    )
}
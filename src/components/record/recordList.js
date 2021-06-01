import React,{useCallback,useState} from 'react';
import {Link} from 'react-router-dom'

export default function ListItem({status,request,checked,handleCheck,handleProcess}){

    const [selected,setSelected] = useState(checked);

    const handleSelect=useCallback(()=>{
        setSelected(prevSelect=>!prevSelect)
    },[checked])

    
    return(
        <>
            <tr className="tb-tr">
                {
                     status ? 
                        <td>
                            <input 
                                className="req-check"
                                type="checkbox" 
                                checked={selected ? true : false}
                                onChange={handleSelect}
                                value={request.id}
                            />
                        </td>
                    :null
                }
                <td>{request.purok}</td>
                <td>{request.household}</td>
                <td>{request.householdManager}</td>
                <td>{request.role}</td>
                <td>
                    <Link className="process-btn" to='/records/view' >View</Link>
                </td>
            </tr>
        </>
    )
}
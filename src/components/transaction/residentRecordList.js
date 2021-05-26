import React,{useCallback,useState} from 'react';
import {Link} from 'react-router-dom';

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
                <td>{request.gender}</td>
                <td>
                    <Link 
                        to='/records/residents/view'
                        className="process-btn"
                    >
                        View
                    </Link>
                </td>
                <td>
                    <button 
                        style={{background:'#4F56F4'}}
                        className="process-btn"
                        onClick={handleProcess}
                    >Edit</button>
                </td>
            </tr>
        </>
    )
}
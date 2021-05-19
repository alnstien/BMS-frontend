import React,{useCallback,useState} from 'react';


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
                    <button 
                        className="process-btn"
                        onClick={handleProcess}
                    >View</button>
                </td>
                <td>
                    <button 
                        style={{background:'#4F56F4'}}
                        className="process-btn"
                        onClick={handleProcess}
                    >Edit</button>
                </td>
                <td>
                    <button 
                        style={{background:'#ED3434'}}
                        className="process-btn"
                        onClick={handleProcess}
                    >Delete</button>
                </td>
            </tr>
        </>
    )
}
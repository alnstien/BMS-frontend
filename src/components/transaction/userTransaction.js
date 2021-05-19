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
                <td>{request.name}</td>
                <td>{request.type}</td>
                <td>{request.status}</td>
                <td>{request.rel_date}</td>
                <td>
                    <button 
                        className="process-btn"
                        onClick={handleProcess}
                    >View</button>
                </td>
                <td>
                    <button 
                        style={{background:'#ED3434'}}
                        className="process-btn"
                        onClick={handleProcess}
                    >Cancel</button>
                </td>
            </tr>
        </>
    )
}
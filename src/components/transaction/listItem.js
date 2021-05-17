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
                <td>{request.date}</td>
                <td>{request.name}</td>
                <td>{request.request}</td>
                <td>
                    <div className="request-status-cc">
                        <p
                            style={{color: request.status==='Valid' ? 'green' :'rgb(231, 12, 12)' }}
                        >{request.status}</p>
                    </div>
                </td>
                <td>
                    <button 
                        className="process-btn"
                        onClick={handleProcess}
                    >Process</button>
                </td>
                <td>
                    <button 
                        className="process-btn"
                        onClick={handleProcess}
                    >Edit</button>
                </td>
                <td>
                    <button 
                        className="process-btn"
                        onClick={handleProcess}
                    >Delete</button>
                </td>
            </tr>
        </>
    )
}
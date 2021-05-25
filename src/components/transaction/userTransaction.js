import React,{useCallback,useState,useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function ListItem({status,request,checked,handleCheck,handleProcess}){
    const [selected,setSelected] = useState(checked);
    const [color,setColor] = useState('');
    const handleSelect=useCallback(()=>{
        setSelected(prevSelect=>!prevSelect)
    },[checked])

    useEffect(() => {
            if(request.status==="Success"){
                setColor('green')
            }else if(request.status==="Pending"){
                setColor('orange')
            }else{
                setColor('red')
            }
        return () => {
            setColor('')
        }
    }, [])
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
                <td style={{color:color}}>{request.status}</td>
                <td>{request.rel_date}</td>
                <td>
                   <Link to="/user/transactions/view=1">
                    <button 
                        className="process-btn"
                        onClick={handleProcess}
                    >View</button>
                   </Link>
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
import React,{useCallback,useState} from 'react';


export default function ListItem({list,checked}){

    const [selected,setSelected] = useState(checked);

    const handleSelect=useCallback(()=>{
        setSelected(prevSelect=>!prevSelect)
    },[checked])

    
    return(
        <>
            <tr className="tb-tr">
                <td>{list.id}</td>
                <td>{list.date}</td>
                <td>{list.number}</td>
                <td style={{color: list.status==='Available' ? 'green' : 'orange'}}>{list.status}</td>
            </tr>
        </>
    )
}
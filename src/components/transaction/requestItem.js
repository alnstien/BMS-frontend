import React,{useCallback,useState} from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export default function ListItem({status,request,checked,handleCheck,handleProcess}){

    const [selected,setSelected] = useState(checked);

    const handleSelect=useCallback(()=>{
        setSelected(prevSelect=>!prevSelect)
    },[checked])

    const handleReject=()=>{
       return Swal.fire({
            title: 'Are you sure you want reject this request?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Reject it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
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
                            style={{color: request.status==='Resident' ? 'green' :'rgb(231, 12, 12)' }}
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
                        style={{background:'red'}}
                        className="process-btn"
                        onClick={handleReject}
                    >Reject</button>
                </td>
            </tr>
        </>
    )
}
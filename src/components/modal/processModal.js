import React, { useState } from 'react'
import Modal from 'react-modal'
import './processmodal.css';
import Swal from 'sweetalert2'
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'



export default function CreatePostModal({show,setShow}) {

    const handleAlert=()=>{
        Swal.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'   
    )
    }
  return (
      <Modal isOpen={show}
        style={{
            overlay: width <= 700 ? fulloverlay : flexoverlay,
            content: width <= 700 ? content : flexContent
        }}
     >
        <div className="flex-modal">
            <button
                onClick={()=>setShow(!show)}
            >Close</button>
            <button onClick={handleAlert}>Alert</button>
        </div>
     </Modal>
    )
}

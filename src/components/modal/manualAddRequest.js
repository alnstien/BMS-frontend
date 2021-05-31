import React, { useState } from 'react'
import Modal from 'react-modal'
import './processmodal.css';
import Swal from 'sweetalert2'
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'
import {Typography} from '@material-ui/core'
import ProImg from '../../assets/avatar.jpg'
import ProQR from '../../assets/qr.png'


export default function ManualAddRequest({show,setShow}) {

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
            overlay: fulloverlay,
            content: content
        }}
     >
        <div className="flex-modal">
            <button
                 className="modal-close"
                onClick={()=>setShow(!show)}
            >&times;</button>
            <div className="flex-modal-content">
                <div className="modal-process-header">

                </div>
            </div>
        </div>
     </Modal>
    )
}

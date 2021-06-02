import React, { useState } from 'react'
import Modal from 'react-modal'
import './processmodal.css';
import Swal from 'sweetalert2'
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'
import {Typography} from '@material-ui/core'
import ProImg from '../../assets/avatar.jpg'
import ProQR from '../../assets/qr.png'
import ORImage from '../../assets/or.png'


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
            overlay: fulloverlay,
            content: content
        }}
     >
        <div className="flex-modal">
            <div className="flex-modal-header-sticky">
                <button
                    className="modal-close"
                    onClick={()=>setShow(!show)}
                >&times;</button>
            </div>
            <div className="flex-modal-content">
                <div className="modal-process-header">
                    <div className="process-user-info">
                        <img src={ProImg} alt="" />
                        <div className="process-user-info-content">
                            <div className="process-user-classification">
                                <p>Resident</p>
                            </div>
                            <Typography variant="h5">BARANGAY CERTIFICATE</Typography>
                            <Typography color="textSecondary"><b>Date: </b>September 12, 2022</Typography>
                            <Typography><b>Name: </b>Jane Doe</Typography>
                            <Typography><b>Purok: </b>Purok 1</Typography>
                            <Typography><b>Household Number: </b>HSE-5687846868-12</Typography>
                        </div>
                    </div>
                    <div className="process-user-qr">
                       <form>
                           <img 
                                src={ProQR}
                                className="process-qr-code"
                                alt="" 
                            />
                           <button className="mt-5">Download QR Code</button>
                       </form>
                    </div>
                </div>
                <div className="modal-process-header">
                    <div className="inline-column mt-10">
                        <Typography variant="h5" color="secondary">Requirement/s Verification</Typography>
                        <Typography>2 Files Attached</Typography>
                        <a href={ORImage} target="_blank">Photo of Issued OR</a>
                        <a href={ProImg} target="_blank">Photo of Purok Clearance</a>
                    </div>
                </div>
                <div className="modal-process-footer mt-10">
                    <div className="inline-column mt-10">
                        <Typography variant="h5">Upload your Files</Typography>
                    </div>
                </div>
            </div>
        </div>
     </Modal>
    )
}

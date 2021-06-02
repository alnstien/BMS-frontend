import React, { useState } from 'react'
import Modal from 'react-modal'
import './processmodal.css';
import Swal from 'sweetalert2'
import {fulloverlay,AddContent,AddContentShort} from '../../config/setup'
import {Typography,FormGroup,FormControl,TextField,MenuItem,Select,InputLabel,Button} from '@material-ui/core'
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
    const handleSelect=(e)=>{

    }
    const handleGenerate=(e)=>{
        return Swal.fire({
            title: 'Successfully Generated!',
            imageUrl: ProQR,
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: 'Custom image',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Download QR Code'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                'Success!',
                'Download is starting',
                'success'
            )
            }
          })
    }
    const handleProcess=(e)=>{
       return Swal.fire({
            icon: 'success',
            title: 'Request is successfully added',
            showConfirmButton: false,
            timer: 1500
          })
    }
  return (
      <Modal isOpen={show}
        style={{
            overlay: fulloverlay,
            content: AddContentShort
        }}
     >
        <div className="add-modal">
            <div className="modal-header">
                <Typography variant="h5">Add Request Manually</Typography>
                <button
                    className="modal-close"
                    onClick={()=>setShow(!show)}
                >&times;</button>
            </div>
            <div style={{minHeight:'30vh'}} className="modal-body">
                <form className="form-flex-add">
                    <FormGroup>
                        <FormControl style={{marginTop:10}}>
                            <TextField 
                                variant="outlined"
                                color="secondary"
                                label="Resident's Name"
                            />
                        </FormControl>
                        <FormControl style={{marginTop:10}}>
                            <TextField 
                                variant="outlined"
                                color="secondary"
                                label="Address"
                            />
                        </FormControl>
                        <FormControl style={{marginTop:10}}>
                            <TextField 
                                variant="outlined"
                                color="secondary"
                                label="Official Receipt Number"
                            />
                        </FormControl>
                        <FormControl style={{marginTop:10}}>
                            <InputLabel 
                                id="demo-simple-select-helper-label"
                                color="secondary"
                            >Type Of Certificate</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={e=>handleSelect(e)}
                                color="secondary"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'barangay_certification_of_residency'}>
                                    Barangay Certification of Residency
                                </MenuItem>
                                <MenuItem value={'barangay_clearance'}>
                                    Barangay Clearance
                                </MenuItem>
                                <MenuItem value={"certification_of_indegency"}>
                                    Certification of Indigency
                                </MenuItem>
                                <MenuItem value={"certification_of_good_moral"}>
                                    Certification of Good Moral
                                </MenuItem>
                                <MenuItem value={"certificate_of_cutting_trees"}>
                                    Certificate of Approval for Cutting Trees
                                </MenuItem>
                                <MenuItem value={"letter_of_acceptance"}>
                                    Letter of Acceptance
                                </MenuItem>
                                <MenuItem value={"others"}>Others</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{marginTop:10}}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleGenerate}
                            >
                                Generate QR Code
                            </Button>
                        </FormControl>
                        <FormControl style={{marginTop:10}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleProcess}
                            >
                                Add to Process
                            </Button>
                        </FormControl>
                    </FormGroup>
                </form>
            </div>
        </div>
     </Modal>
    )
}

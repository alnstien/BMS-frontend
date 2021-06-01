import React, { useState } from 'react'
import Modal from 'react-modal'
import './processmodal.css';
import Swal from 'sweetalert2'
import {flexContent,flexoverlay,fulloverlay,AddContent,width} from '../../config/setup'
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
  return (
      <Modal isOpen={show}
        style={{
            overlay: fulloverlay,
            content: AddContent
        }}
     >
        <div className="add-modal">
            <div className="modal-header">
                <Typography variant="h5">Add Request</Typography>
                <button
                    className="modal-close"
                    onClick={()=>setShow(!show)}
                >&times;</button>
            </div>
            <div className="modal-body">
                <form className="form-flex-add">
                    <FormGroup>
                        <FormControl>
                            <TextField 
                                variant="outlined"
                                color="secondary"
                                label="Resident's Name"
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
                                color="secondary"
                                
                            >
                                Process
                            </Button>
                        </FormControl>
                    </FormGroup>
                </form>
            </div>
        </div>
     </Modal>
    )
}

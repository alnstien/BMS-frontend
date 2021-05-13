import React, { useState } from 'react'
import Modal from 'react-modal'
import './modal.css';
import { TextField,Button,MenuItem,Select,InputLabel,FormControl,FormControlLabel,Checkbox, FormGroup } from '@material-ui/core';
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'



export default function RequestCertificateModal({show,setShow}) {
  const [others,setOthers] = useState(false);
  const [issuedName,setIssueName] = useState(false);


  const handleClose=()=>{
    return setShow(false);
  }

  const handleSelect=(e)=>{
      if(e.target.value==="Others"){
        setOthers(true)
      }else{
        setOthers(false)
      }
  }
  const handleCheckRequest=(e)=>{
    setIssueName(!issuedName);
  }
  return (
      <Modal isOpen={show}
        style={{
          overlay: width <= 700 ? fulloverlay : flexoverlay,
          content: width <= 700 ? content : flexContent
        }}
     >
      <div className="modal-wrapper">
        <div className="modal-certificate">
          <div className="modal-header">
            <h2 className="modal-title"></h2>
              <button 
                onClick={handleClose}
                className="modal-close"
            >&times;</button>
          </div>
          <div className="modal-body">
            <form className="form-flex">
            <FormGroup>
            <FormControl >
              <InputLabel id="demo-simple-select-helper-label">Type Of Certificate</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={e=>handleSelect(e)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Barangay Certification of Residency'}>Barangay Certification of Residency</MenuItem>
                <MenuItem value={'Barangay Clearance'}>Barangay Clearance</MenuItem>
                <MenuItem value={"Certification of Indegency"}>Certification of Indegency</MenuItem>
                <MenuItem value={"Certification of Good Moral"}>Certification of Good Moral</MenuItem>
                <MenuItem value={"Barangay Certification of Land Ownership"}>Barangay Certification of Land Ownership</MenuItem>
                <MenuItem value={"Certificate of Cutting Trees"}>Certificate of Cutting Trees</MenuItem>
                <MenuItem value={"Letter of Acceptance"}>Letter of Acceptance</MenuItem>
                <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
            </FormControl>
            {
              others ? 
              <>
                <FormControl style={{marginTop:10}}>
                  <TextField
                    multiline={true}
                    label="Please Specify your purpose..."
                    rowsMax={15}
                  />
                </FormControl>
                </>
              : null
            }
              <FormControl style={{marginTop:10}}>
                <FormControlLabel
                  value={issuedName}
                  control={<Checkbox 
                  value={issuedName}
                  color="secondary" 
                  onChange={e=>handleCheckRequest(e)}
                />}
                  label="I don't want to send my request as John Doe"
                  labelPlacement="end"
              />
              </FormControl>
                <FormControl style={{marginTop:10}}>
                  <TextField
                    label="Enter Full Name..."
                    disabled={issuedName ? false : true}
                  />
                </FormControl>
                <FormControl style={{marginTop:10}}>
                  <TextField
                    label="Enter Full Name"
                    disabled={issuedName ? false : true}
                  />
                </FormControl>
            <FormControl>
            <Button variant="contained" color="primary" style={{marginTop:20}}>
              Send Request
            </Button>
            </FormControl>
            </FormGroup>
            </form>
          </div>
        </div>
      </div>
     </Modal>
    )
}

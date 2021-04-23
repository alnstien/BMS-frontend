import React, { useState } from 'react'
import Modal from 'react-modal'
import './modal.css';
import { TextField,Button,MenuItem,Select,InputLabel,FormControl,FormControlLabel,Checkbox, FormGroup } from '@material-ui/core';

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
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex:"4"
          },
          content: {
            position: 'absolute',
            border: 'none',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            background: 'none',
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            zIndex:"4"
          }
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
                <MenuItem value={'Barangay Certificate'}>Barangay Certificate</MenuItem>
                <MenuItem value={"Certificate of Indegency"}>Certificate of Indegency</MenuItem>
                <MenuItem value={"Others"}>Others</MenuItem>
              </Select>
            </FormControl>
            </FormGroup>
            {
              others ? 
              <FormGroup style={{marginTop:10}}>
                <FormControl>
                  <TextField
                    multiline={true}
                    label="Please Specify..."
                    rows={1}
                    rowsMax={15}
                  />
                </FormControl>
            </FormGroup>
              : null
            }
            <FormGroup style={{marginTop:10}}>
                <FormControl>
                <FormControlLabel
                  value={issuedName}
                  control={<Checkbox 
                  value={issuedName}
                  color="primary" 
                  onChange={e=>handleCheckRequest(e)}
                />}
                label="I don't want to send my request as John Doe"
                labelPlacement="end"
            />
                </FormControl>
            </FormGroup>
            <FormGroup style={{marginTop:10}}>
                <FormControl>
                  <TextField
                    label="Enter Full Name"
                    disabled={issuedName ? false : true}
                  />
                </FormControl>
            </FormGroup>
            <FormGroup>
            <Button variant="contained" color="primary" style={{marginTop:20}}>
              Request
            </Button>
            </FormGroup>
            </form>
          </div>
        </div>
      </div>
     </Modal>
    )
}

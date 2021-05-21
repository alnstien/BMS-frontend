import React, { useState } from 'react'
import Modal from 'react-modal'
import './modal.css';
import { TextField,Button,MenuItem,Select,InputLabel,FormControl,FormControlLabel,Checkbox, FormGroup } from '@material-ui/core';
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'

const gender=[
    {name:"None",value:''},
    {name:'Male',value:"male"},
    {name:'Female',value:'female'}
]

const familyRole = [
    {name:"None",value:''},
    {name:"Child",value:'child'},
    {name:"Father",value:'father'},
    {name:"Mother",value:'mother'},
    {name:"Relative",value:'relative'},
    {name:"Others",value:'others'}
]

export default function AddMember({show,setShow}) {
  const [others,setOthers] = useState(false);
  const [issuedName,setIssueName] = useState(false);
 
  const handleClose=()=>{
    return setShow(false);
  }

  const handleSelect=()=>{
      
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
              <InputLabel 
                id="demo-simple-select-helper-label"
                color="secondary"
              >Household Role</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={e=>handleSelect(e)}
                color="secondary"
              >
                {
                    familyRole.map(fam=>{
                        return<MenuItem value={fam.value}>{fam.name}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
            <FormControl style={{marginTop:10}} >
              <InputLabel 
                id="demo-simple-select-helper-label"
                color="secondary"
              >Gender</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // onChange={e=>handleSelect(e)}
                color="secondary"
              >
                {
                    gender.map(fam=>{
                        return<MenuItem value={fam.value}>{fam.name}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
            <FormControl style={{marginTop:10}}>
                <TextField
                    variant="outlined"
                    color="secondary"
                    label="First Name"
                />
            </FormControl>
            <FormControl style={{marginTop:10}}>
                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Middle Name"
                />
            </FormControl>
            <FormControl style={{marginTop:10}}>
                <TextField
                    variant="outlined"
                    color="secondary"
                    label="Last Name"
                />
            </FormControl>
            <FormControl style={{marginTop:10}}>
                <TextField
                    type="number"
                    variant="outlined"
                    color="secondary"
                    label="Contact Number(Optional)"
                />
            </FormControl>
            <FormControl>
            <Button 
              variant="contained" 
              color="secondary" 
              style={{marginTop:20}}
            >
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

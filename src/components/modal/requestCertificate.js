import React, { useState } from 'react'
import Modal from 'react-modal'
import './modal.css';
import { TextField,Button,MenuItem,Select,InputLabel,FormControl,FormControlLabel,Checkbox, FormGroup } from '@material-ui/core';
import {flexContent,flexoverlay,fullContent,fulloverlay,content,width} from '../../config/setup'



export default function RequestCertificateModal({show,setShow}) {
  const [others,setOthers] = useState(false);
  const [issuedName,setIssueName] = useState(false);
  const [approval,setApproval] = useState(false)
  const [acceptance,setAcceptance] = useState(false)
  const [land,setLand] = useState(false)

  const handleClose=()=>{
    setOthers(false)
    setApproval(false);
    setAcceptance(false)
    setLand(false)
    return setShow(false);
  }

  const handleSelect=(e)=>{
      if(e.target.value==="others"){
        setOthers(true)
        setApproval(false);
        setAcceptance(false)
        setLand(false)
      }else if(e.target.value==="certificate_of_cutting_trees"){
        setApproval(true);
        setOthers(false)
        setLand(false)
        setAcceptance(false)
      }else if(e.target.value==="letter_of_acceptance"){
        setAcceptance(true)
        setApproval(false);
        setOthers(false)
        setLand(false)
      }else if(e.target.value==="barangay_certification_of_land_ownership"){
        setAcceptance(false)
        setLand(true)
        setApproval(false);
        setOthers(false)
      }else{
        setOthers(false)
        setApproval(false);
        setAcceptance(false)
        setLand(false)
      }
  }
  const handleCheckRequest=(e)=>{
    setIssueName(!issuedName);
  }
  return (
      <Modal isOpen={show}
        style={{
          overlay: fulloverlay,
          content:fullContent 
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
                <MenuItem value={'barangay_certification_of_residency'}>Barangay Certification of Residency</MenuItem>
                <MenuItem value={'barangay_clearance'}>Barangay Clearance</MenuItem>
                <MenuItem value={"certification_of_indegency"}>Certification of Indigency</MenuItem>
                <MenuItem value={"certification_of_good_moral"}>Certification of Good Moral</MenuItem>
                <MenuItem value={"certificate_of_cutting_trees"}>Certificate of Approval for Cutting Trees</MenuItem>
                <MenuItem value={"letter_of_acceptance"}>Letter of Acceptance</MenuItem>
                <MenuItem value={"others"}>Others</MenuItem>
              </Select>
            </FormControl>
            {
              approval ? 
              <>
                <FormControl style={{marginTop:10}}>
                  <TextField
                    multiline={true}
                    color="secondary"
                    label="Kumpletong inpormasyon, ex. ngalan sa kahoy, pila kabook"
                    rowsMax={15}
                  />
                  <TextField
                    color="secondary"
                    label="Lokasyon"
                  />
                  <TextField
                    color="secondary"
                    label="Purpose"
                  />
                </FormControl>
                </>
              : null
            }
            {
              others ? 
              <>
                <FormControl style={{marginTop:10}}>
                  <TextField
                    multiline={true}
                    color="secondary"
                    label="Please Specify your purpose..."
                    rowsMax={15}
                  />
                </FormControl>
                </>
              : null
            }
            {
              acceptance ? 
              <>
                <FormControl style={{marginTop:10}}>
                  <TextField
                    color="secondary"
                    label="Lokasyon kung asa ka gikan"
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
                  label="Not for me"
                  labelPlacement="end"
              />
              </FormControl>
                <FormControl style={{marginTop:10}}>
                  <TextField
                    color="secondary"
                    label="Ngalan sa kuhaan..."
                    disabled={issuedName ? false : true}
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

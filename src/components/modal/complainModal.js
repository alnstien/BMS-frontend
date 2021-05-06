import React from 'react'
import Modal from 'react-modal'
import './modal.css';
import { TextField,Button, FormGroup, FormControl } from '@material-ui/core';
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'




export default function ComplainModal({show,setShow}) {
  
  const handleClose = ()=>{
    return setShow(false)
  }
  return (
      <Modal isOpen={show}
      style={{
        overlay: width <= 700 ? fulloverlay : flexoverlay,
        content: width <= 700 ? content : flexContent
      }}
     >
      <div className="modal-wrapper">
          <div className="modal-contain">
              <div className="complain-modal-wrapper">
              <div className="modal-header">
                  <h2 className="modal-title"></h2>
                  <button 
                    onClick={handleClose}
                    className="modal-close"
                  >&times;</button>
              </div>
              <div className="modal-content">
                  <form className="form-flex">
                  <FormGroup>
                    <FormControl>
                      <TextField 
                          variant="outlined"
                          label="Ngalan sa Ireklamo"
                          // onChange={e=>handleChange(e,setLname)}
                      />
                    </FormControl>
                        <FormControl style={{marginTop:10}}>
                          <TextField 
                            variant="outlined"
                            label="Rason sa pagreklamo"
                            multiline={true}
                            rowsMax={10}
                            rows={10}
                            // onChange={e=>handleChange(e,setLname)}
                        />
                        </FormControl>
                      <FormControl style={{marginTop:10}}>
                        <Button variant="contained" color="primary">Confirm</Button>
                      </FormControl>
                  </FormGroup>
                  </form>
              </div>
              </div>
          </div>
      </div>
     </Modal>
    )
}

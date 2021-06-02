import React, { useState } from 'react'
import Modal from 'react-modal'
import SimpleBar from 'simplebar-react';
import {FormGroup,FormControl,TextField} from '@material-ui/core';
import {BiImageAdd} from 'react-icons/bi'
import { Button } from '@material-ui/core';
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'


function PhotoHolder({preview,handleRemovePhoto,index}){
  return(
    <div className="posts-photo-holder">
        <button 
          onClick={()=>handleRemovePhoto(preview,index)}
          className="posts-photo-close">&times;</button>
        <img src={preview} alt=""/>
    </div>
  )
}


export default function CreatePostModal({show,setShow}) {
 

  const handleClose=()=>{
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
          <div className="create-post">
              <div className="modal-header">
                  <h2 className="modal-title">Add Official Receipt</h2>
                  <button 
                    onClick={handleClose}
                    className="modal-close"
                  >&times;</button>
              </div>
              <div className="modal-body">
                  <form
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                    }}
                  >
                        <FormControl>
                            <TextField
                                color="secondary"
                                variant="outlined"
                                label="Official Receipt Number"
                            />
                        </FormControl>
                        <FormControl style={{marginTop:20}}>
                            <Button variant="contained" color="secondary">Add</Button>
                        </FormControl>

                  </form>
              </div>
          </div>
      </div>
     </Modal>
    )
}
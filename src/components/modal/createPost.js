import React from 'react'
import Modal from 'react-modal'
import './modal.css';
import { TextareaAutosize } from '@material-ui/core';
import {BiImageAdd} from 'react-icons/bi'
import { Button } from '@material-ui/core';

export default function CreatePostModal({show,setShow}) {
  
  const handleClose=()=>{
    return setShow(false)
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
            borderRadius: '4px',
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
          <div className="create-post">
              <div className="modal-header">
                  <h2 className="modal-title">Post</h2>
                  <button 
                    onClick={handleClose}
                    className="modal-close"
                  >&times;</button>
              </div>
              <div className="modal-body">
                <div className="modal-adons">
                    <input type="file" id="post-img" />
                    <label className="post-img-wrapper" for="post-img">
                      <span>
                        <BiImageAdd size={25} color={'#fff'} />
                      </span>
                    </label>
                </div>
                  <form>
                    <TextareaAutosize 
                      rowsMin={8}
                      rowsMax={8}
                      placeholder="Write something..."
                    />
                  <div className="modal-footer">
                  <Button variant="contained" color="primary">Post</Button>
                  </div>
                  </form>
                  
              </div>
          </div>
      </div>
     </Modal>
    )
}

import React, { useState } from 'react'
import Modal from 'react-modal'
import './processmodal.css';






export default function CreatePostModal({show,setShow}) {


  return (
      <Modal isOpen={show}
      style={{
          overlay: {
            position: 'fixed',
            height:'100vh',
            width:'100vw',
            zIndex:"4",
            backgroundColor: 'rgba(0, 0, 0, .6)',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
            
          },
          content: {
            position: 'relative',
            border: 'none',
            borderRadius:0,
            inset:0,
            padding:0,
            display:'flex',
            background:'none',
            height:'90%',
            width:'90%',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            alignItems:'center',
            justifyContent:'center'
          }
        }}
     >
        <div className="flex-modal">
            <button
                onClick={()=>setShow(!show)}
            >Close</button>
        </div>
     </Modal>
    )
}

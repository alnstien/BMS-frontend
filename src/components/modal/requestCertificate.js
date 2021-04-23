import React from 'react'
import Modal from 'react-modal'
import './modal.css';


export default function RequestCertificateModal({show,setShow}) {
  
  const handleClose=()=>{
    return setShow(false);
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
            padding: '20px',
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
        </div>
      </div>
     </Modal>
    )
}

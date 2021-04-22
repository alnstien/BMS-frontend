import React from 'react'
import Modal from 'react-modal'
import './modal.css';

export default function RequestCertificateModal({show,setShow}) {
    return (
      <Modal isOpen={true}
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
      <div className="modal-content-wrapper">
          <div className="modal-form">
              <form className="form-success-setup">
                  <h1>Successfully setup your environment.</h1>
                  <p>You can manage the system now by logging in this account, your recovery code is <b></b>. If you forgot your password you can recover your account using this code.</p>
                  <div className="form-setup-footer">
                  <button onClick={()=>alert("Hello world")}>I wish to proceed.</button>
                  </div>
              </form>
          </div>
      </div>
     </Modal>
    )
}

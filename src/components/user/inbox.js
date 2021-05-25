import React,{useState} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import RequestCertificateModal from '../modal/requestCertificate'
import PhoneNav from '../navbar/phoneNavbar';
import { Typography } from '@material-ui/core';
import FloatingActions from '../navbar/floatingActions';

function Message(){
    return(
        <>
         <div className="post-wrapper">
             <div className="post-wrapper-header">
                 <Typography>Jane Doe</Typography>
                 <small>Yesterday at 5:36 PM</small>
             </div>
             <div className="post-wrapper-body">
                 <Typography style={{fontSize:14}}>
                 Hello User, we are so thankful for having you in our online platform. 
 Feel free to let us know your concerns.
 Hello User, we are so thankful for having you in our online platform. 
 Feel free to let us know your concerns.
 Hello User, we are so thankful for having you in our online platform. 
 Feel free to let us know your concerns.
                 </Typography>
             </div>
         </div>
        </>
    ) 
 }

export default function Inbox(props) {
    const [certificateModal,setCertificateModal] = useState(false);
    const screenWidth = window.innerWidth;
    return (
        <>
        <Navbar isLogged={true} />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    inboxActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
            {
                screenWidth <= 700 ? 
                <PhoneNav 
                    inboxActive ={true}
                    setShow={setCertificateModal}
              />
              :null
              }
                <div className="user-root">
                    <Message />
                </div>
                {
                screenWidth <= 700 ? 
                <FloatingActions
                  setShow={setCertificateModal}
                />
                :null
              }
            </div>
        </div>
        <RequestCertificateModal 
          show={certificateModal}
          setShow={setCertificateModal}
        />
        </>
    )
}

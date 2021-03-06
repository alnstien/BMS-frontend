import React,{useState} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import RequestCertificateModal from '../modal/requestCertificate'
import ComplainModal from '../modal/complainModal';
import CreatePostModal from '../modal/createPost';
import PhoneNav from '../navbar/phoneNavbar';
import {BsReply,BsTrash} from 'react-icons/bs'
import { Typography } from '@material-ui/core';
import Nav from '../navbar/optionNav';
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
    const [complainModal,setComplainModal] = useState(false);
    const [createPostModal,setCreatePostModal] = useState(false);
    const screenWidth = window.innerWidth;
    return (
        <>
        <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    inboxActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
                />
            </div>
            <div className="user-wrapper">
            {
                screenWidth <= 700 ? 
                <PhoneNav 
                    inboxActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
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
                  setShowComplain={setComplainModal}
                  setShowCreatePostModal={setCreatePostModal}
                />
                :null
              }
            </div>
        </div>
        <RequestCertificateModal 
          show={certificateModal}
          setShow={setCertificateModal}
        />
        <ComplainModal 
          show={complainModal}
          setShow={setComplainModal}
        />
        <CreatePostModal 
          show={createPostModal}
          setShow={setCreatePostModal}
        />
        </>
    )
}

import React,{useState} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import RequestCertificateModal from '../modal/requestCertificate'
import ComplainModal from '../modal/complainModal';
import CreatePostModal from '../modal/createPost';
import PhoneNav from '../navbar/phoneNavbar';
import { Typography } from '@material-ui/core';
import FloatingActions from '../navbar/floatingActions';

function Event(){
   return(
       <>
        <div className="post-wrapper">
            <div className="post-wrapper-header">
                <Typography>Jane Doe</Typography>
                <small>Yesterday at 5:36 PM</small>
            </div>
            <div className="post-wrapper-body">
                <Typography>
                Hello User, we are so thankful for having you in our online platform. 
Feel free to let us know your concerns.
                </Typography>
            </div>
        </div>
       </>
   ) 
}


export default function Events(props) {
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
                    eventsActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
                />
            </div>
            <div className="user-wrapper">
            {
                screenWidth <= 700 ? 
                <PhoneNav 
                    eventsActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
              />
              :null
            }
                <div className="user-root">
                    <Event />
                    <Event />
                    <Event />
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
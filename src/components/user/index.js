import React, { useState } from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import Card from '../card/post';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';

import RequestCertificateModal from '../modal/requestCertificate'
import ComplainModal from '../modal/complainModal';
import CreatePostModal from '../modal/createPost';
 
export default function User(props) {
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
                    homeActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
                />
            </div>
            <div className="user-wrapper">
              {
                screenWidth <= 700 ? 
                <PhoneNav 
                  homeActive ={true}
                  setShow={setCertificateModal}
                  setShowComplain={setComplainModal}
                  setShowCreatePostModal={setCreatePostModal}
              />
              :null
              }
                <div className="user-root">
                    <Card
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                    <Card
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
                    <Card
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />

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

import React,{useState} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import RequestCertificateModal from '../modal/requestCertificate'
import ComplainModal from '../modal/complainModal';
import CreatePostModal from '../modal/createPost';
import PhoneNav from '../navbar/phoneNavbar';


export default function Profile(props) {

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
                    profileActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
                />
            </div>
            <div className="user-wrapper">
            {
                screenWidth <= 700 ? 
                <PhoneNav 
                    profileActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
              />
              :null
            }
                <div className="user-root">
                    <div className="post-wrapper">
                        
                    </div>
                    <div className="post-wrapper">

                    </div>
                    <div className="post-wrapper">

                    </div>
                </div>
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

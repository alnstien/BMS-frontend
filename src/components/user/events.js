import React,{useState,useRef,useEffect} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import RequestCertificateModal from '../modal/requestCertificate'
import PhoneNav from '../navbar/phoneNavbar';
import { Typography } from '@material-ui/core';
import FloatingActions from '../navbar/floatingActions';
import ClickOutsideHandler from '../../config/clickOutsideHandler';


export function Event({auth}){
    const DropdownRef = useRef();
    const [showOption,setShowOption] = useState(false);

    //handling clicking outside of the option
    ClickOutsideHandler(DropdownRef,useEffect,setShowOption);


   return(
       <>
        <div className="post-wrapper">
            {
            !auth ? null
            : 
            <div className="dropdown-nav ft m-15" ref={DropdownRef}>
                <div className="dropdown-content">
                    <button 
                        className="dropdown-btn" 
                        onClick={()=>setShowOption(!showOption)}
                    >

                    </button>
                    <div className="dropdown-content-nav" 
                        style={{
                            display: showOption  ?"block" : "none"
                        }}
                    >
                        <button className="dropdown-links" >
                            <span>red</span> 
                            Delete
                        </button>
                    </div>
                </div>
            </div> 
            }
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

    const screenWidth = window.innerWidth;

    return (
        <>
        <Navbar isLogged={true} />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    eventsActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
            {
                screenWidth <= 700 ? 
                <PhoneNav 
                    eventsActive ={true}
                    setShow={setCertificateModal}
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
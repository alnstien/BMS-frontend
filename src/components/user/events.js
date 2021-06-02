import React,{useState} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import Event from '../card/announcementCard';
import {Typography} from '@material-ui/core'


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
                    <Typography style={{marginTop:20}} variant="h5">Barangay Announcements</Typography>
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
    </>
    )
}
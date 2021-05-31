import React, { useState,useEffect,useCallback } from 'react'
import SimpleBar from 'simplebar-react';
import Event from '../card/announcementCard'
import './announcement.css';
import PostSidebar from '../sidebar/postAnnouncementSidebar'; 
import Sidebar from '../sidebar' 
import SNavbar from '../navbar/snav';
import {Typography} from '@material-ui/core'
import AddAnnouncementModal from '../modal/addAnnouncement';
const width = window.innerWidth;

export default function Announcement(props) {
    const [isOpen,setOpen] = useState(true)
    const [openModal,setOpenModal] = useState(false);


    const toggleSidebar=(e)=>{
        e.preventDefault();
        setOpen(prevOpen=>!prevOpen)
    }

    
    return (
        <div className="con-container"> 
            <Sidebar postActive={true}/>
            <div className="content-wrapper">
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <SNavbar 
                            toggleSidebar={toggleSidebar}
                            isOpen={isOpen}
                        />
                        <div className="content-flex">
                            <div className="req-overview"
                                style={{
                                    transition:'.2s',
                                    width: isOpen ? '300px' : 0, minWidth: isOpen ? '300px' : 0,
                                }}
                            >
                            <SimpleBar className="req-overview-holder">
                                <PostSidebar
                                    active={true} 
                                    show={openModal}
                                    setShow={setOpenModal}
                                    width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                {/* content goes here */}
                                    <div className="admin-announcement-wrapper">
                                        <Typography variant='h4'>
                                            My Announcements
                                        </Typography>
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                        <Event auth={true} />
                                    </div>
                                {/* end of content*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddAnnouncementModal show={openModal} setShow={setOpenModal} />
        </div>
    )
}

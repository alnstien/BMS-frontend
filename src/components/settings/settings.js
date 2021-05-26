import React, { useState,useEffect,useCallback } from 'react'
import './settings.css';
import SimpleBar from 'simplebar-react';
import ProcessModal from '../modal/processModal'; 
import SSidebar from '../sidebar/settingsSidebar'; 
import Sidebar from '../sidebar' 
import SNavbar from '../navbar/snav';
const width = window.innerWidth;


export default function Setting(props) {
    const [isOpen,setOpen] = useState(true)
    const [show,setShow] = useState(false);

    const toggleSidebar=(e)=>{
        e.preventDefault();
        setOpen(prevOpen=>!prevOpen)
    }

    return (
        <>
        <div className="con-container"> 
            <Sidebar settingsActive={true}/>
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
                                <SSidebar
                                    active={true} 
                                    width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                {/* content goes here */}
                                {/* end of content*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProcessModal 
            show={show}
            setShow={setShow}
        />
    </>
    )
}

import React, { useState,useEffect,useCallback } from 'react';
import {Link} from 'react-router-dom';
import {Button,Typography} from '@material-ui/core';
import Sidebar from '../sidebar' 
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import RSidebar from '../sidebar/recordSidebar'; 

const width = window.innerWidth;

export default function ViewPurok(props) {
    const [sortAsc,setSortAsc] = useState(false);
    const [isOpen,setOpen] = useState(true);
    const [check,setCheck] = useState(false);


    const toggleSidebar=(e)=>{
        e.preventDefault();
        setOpen(prevOpen=>!prevOpen)
    }
    const handleSort=(e)=>{
        e.preventDefault();
        setSortAsc(prevSort=>!prevSort)

    }
    const handleCheck=(e)=>{
        e.preventDefault();
        setCheck(prevCheck=>!prevCheck)

    }
    return (
        <>
        <div className="con-container"> 
            <Sidebar recordsActive={true}/>
            <div className="content-wrapper">
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <TNavbar 
                            check={check}
                            toggleSidebar={toggleSidebar}
                            handleSort={handleSort}
                            handleCheck={handleCheck}
                            isOpen={isOpen}
                            sortAsc={sortAsc}
                            check={check}
                        />
                        <div className="content-flex">
                            <div className="req-overview"
                                style={{
                                    transition:'.2s',
                                    width: isOpen ? '300px' : 0, minWidth: isOpen ? '300px' : 0,
                                }}
                            >
                            <SimpleBar className="req-overview-holder">
                                <RSidebar 
                                   purokActive={true} 
                                   width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests-view">
                                    <div className="request-header">
                                        <Link to='/records/purok'>
                                            <Button 
                                                style={{marginRight:10}}
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Back
                                            </Button>
                                        </Link>
                                        <Typography><b>Purok:</b> Purok 1</Typography>
                                    </div>
                                    <div className="request-body">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

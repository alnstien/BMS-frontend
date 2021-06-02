import React, { useState,useEffect,useCallback } from 'react'
import './settings.css';
import SimpleBar from 'simplebar-react';
import {Switch, FormGroup,FormControlLabel,Typography,FormControl} from '@material-ui/core'
import ProcessModal from '../modal/processModal'; 
import SSidebar from '../sidebar/settingsSidebar'; 
import Sidebar from '../sidebar' 
import SNavbar from '../navbar/snav';
const width = window.innerWidth;


export default function Setting(props) {
    const [isOpen,setOpen] = useState(true)
    const [show,setShow] = useState(false);
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };
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
                                    <FormGroup style={{padding:10}}>
                                        <FormControl style={{marginTop:15, padding:10}}>
                                            <Typography variant="body2" color="textSecondary">Open sidebar menu</Typography>
                                            <FormControlLabel
                                                control={<Switch checked={true} />}
                                                label={"Open"}
                                            />
                                        </FormControl>
                                        <FormControl style={{marginTop:15,borderTop:'1px solid lightgray', padding:10}}>
                                            <Typography variant="body2" color="textSecondary">Data Sorted Order</Typography>
                                            <FormControlLabel
                                                control={<Switch checked={false} />}
                                                label={"Ascending"}
                                            />
                                        </FormControl>
                                    </FormGroup>
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

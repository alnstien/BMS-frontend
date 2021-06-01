import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import {Link} from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import ProcessModal from '../modal/processModal'; 
import RSidebar from '../sidebar/recordSidebar'; 
import {Button,TextField,Typography,FormControlLabel,Radio,RadioGroup} from '@material-ui/core'
import DfaultImg from '../../assets/avatar.jpg'
const width = window.innerWidth;


export default function ViewResident(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(true)
    const [check,setCheck] = useState(false)
    const [checked,setChecked] = useState(false);
    const [show,setShow] = useState(false);
    const [page,setPage]= useState(1);
    const [value, setValue] = useState('male');
    const [civilStatus,setCivilStatus] = useState('single')

    const handleChangeRadio = (event) => {
      setValue(event.target.value);
    };

    const handleChangeRadioCS = (event) => {
      setCivilStatus(event.target.value);
    };

    const limit = 5;
    const startIndex = (page-1) * limit;
    const endIndex = page * limit;
    
    const handleChange=(page)=>{
        alert(page)
    }

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
    const handleCheckAll=()=>{
        setChecked(prevChecked=>!prevChecked)
    }
    const handleProcess=()=>{
        setShow(!show)
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
                                    residentActive={true} 
                                    width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests-view">
                                    <div className="request-header">
                                        <Link to='/records/residents'>
                                            <Button 
                                                style={{marginRight:10}}
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Back
                                            </Button>
                                        </Link>
                                        <Typography><b>Resident:</b> Al Ares</Typography>
                                    </div>
                                    <div className="request-body">
                                        <div className="request-body-resident">
                                            <img src={DfaultImg} alt="" className="request-body-resident-img" />
                                            <div className="request-body-resident-info">
                                                <div className="inline-column">
                                                    <Typography><b>Household Number:</b></Typography>
                                                    <TextField 
                                                        variant="outlined" 
                                                        value="001-077" 
                                                        color="secondary"
                                                    />
                                                </div>
                                                <div className="inline-column mt-10">
                                                    <Typography><b>Full Name:</b></Typography>
                                                    <div className="inline s-b mt-10">
                                                        <TextField 
                                                            variant="outlined" 
                                                            value="Ares" 
                                                            label="Last Name"
                                                            color="secondary"
                                                        />
                                                        <TextField 
                                                            variant="outlined" 
                                                            value="Al" 
                                                            label="First Name"
                                                            color="secondary"
                                                        />
                                                        <TextField 
                                                            variant="outlined" 
                                                            value="Lapinig" 
                                                            label="Middle Name"
                                                            color="secondary"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="inline-column mt-10">
                                                    <Typography><b>Date of Birth:</b></Typography>
                                                    <TextField 
                                                        variant="outlined" 
                                                        value="February 08, 1997" 
                                                        color="secondary"
                                                    />
                                                </div>
                                                <div className="inline-column mt-10">
                                                    <Typography><b>Barangay:</b></Typography>
                                                    <TextField 
                                                        variant="outlined" 
                                                        value="Barangay Ezperanza" 
                                                        color="secondary"
                                                    />
                                                </div>
                                                <div className="inline-column mt-10">
                                                    <Typography><b>Occupation:</b></Typography>
                                                    <TextField 
                                                        variant="outlined" 
                                                        value="Local Filipino Worker" 
                                                        color="secondary"
                                                    />
                                                </div>
                                                <div className="inline-column mt-10">
                                                    <Typography><b>Citizenship:</b></Typography>
                                                    <TextField 
                                                        variant="outlined" 
                                                        value="Filipino" 
                                                        color="secondary"
                                                    />
                                                </div>
                                                <div className="inline-column mt-10">
                                                    <Typography><b>Gender:</b></Typography>
                                                    <div className="inline">
                                                    <RadioGroup 
                                                        style={{
                                                            display:'flex',
                                                            flexDirection:'row',
                                                            justifyContent:'space-evenly'
                                                        }} 
                                                            aria-label="gender"
                                                            name="gender1" 
                                                            value={value} 
                                                            onChange={handleChangeRadio}
                                                    >
                                                        <FormControlLabel 
                                                            value="female" 
                                                            control={<Radio />} 
                                                            label="Female" 
                                                        />
                                                        <FormControlLabel 
                                                            value="male" 
                                                            control={<Radio />} 
                                                            label="Male" 
                                                        />
                                                    </RadioGroup>
                                                    </div>
                                                </div>
                                                <div className="inline-column mt-10">
                                                    <Typography><b>Civil Status:</b></Typography>
                                                    <div className="inline">
                                                    <RadioGroup 
                                                        style={{
                                                            display:'flex',
                                                            flexDirection:'row',
                                                            justifyContent:'space-evenly'
                                                        }} 
                                                            aria-label="gender"
                                                            name="gender1" 
                                                            value={civilStatus} 
                                                            onChange={handleChangeRadioCS}
                                                    >
                                                        <FormControlLabel 
                                                            value="single" 
                                                            control={<Radio />} 
                                                            label="Single" 
                                                        />
                                                        <FormControlLabel 
                                                            value="married" 
                                                            control={<Radio />} 
                                                            label="Married" 
                                                        />
                                                        <FormControlLabel 
                                                            value="seperated" 
                                                            control={<Radio />} 
                                                            label="Separated" 
                                                        />
                                                        <FormControlLabel 
                                                            value="widow" 
                                                            control={<Radio />} 
                                                            label="Widow" 
                                                        />
                                                    </RadioGroup>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

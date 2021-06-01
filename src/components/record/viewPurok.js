import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import Pagination from '@material-ui/lab/Pagination';
import ProcessModal from '../modal/processModal'; 
import RSidebar from '../sidebar/recordSidebar'; 
import ListItem from './residentRecordList';
const width = window.innerWidth;


const data=[
    {id:1,purok:"Purok 6",household:"HSE-15456565656",householdManager: 'Al Ares', gender:'Male',member:6},
    {id:2,purok:"Purok 1",household:"HSE-15456565657",householdManager: 'Johenson Santos', gender:'Male',member:6},
    {id:3,purok:"Purok 6",household:"HSE-15456565658",householdManager: 'Arnel Samson', gender:'Male',member:6},
    {id:4,purok:"Purok 5",household:"HSE-15456565659",householdManager: 'Juan dela Cruz', gender:'Male',member:6},
    {id:5,purok:"Purok 2",household:"HSE-1545656560",householdManager: 'Sarrah Jane', gender:'Female',member:6},
    {id:6,purok:"Purok 3",household:"HSE-15456565661",householdManager: 'Al Ares', gender:'Male',member:6},
    {id:7,purok:"Purok 8",household:"HSE-15456565662",householdManager: 'Al Ares', gender:'Male',member:6},
    {id:8,purok:"Purok 7",household:"HSE-15456565663",householdManager: 'Al Ares', gender:'Male',member:6},
    {id:9,purok:"Purok 3",household:"HSE-15456565664",householdManager: 'Al Ares', gender:'Male',member:6},
    {id:10,purok:"Purok 6",household:"HSE-15456565665",householdManager: 'Al Ares', gender:'Male',member:6},

]

export default function ViewPurok(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(true)
    const [check,setCheck] = useState(false)
    const [checked,setChecked] = useState(false);
    const [show,setShow] = useState(false);
    const [page,setPage]= useState(1);


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
                                   purokActive={true} 
                                   width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests">

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

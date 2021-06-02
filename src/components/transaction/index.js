import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import './transaction.css';
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import Pagination from '@material-ui/lab/Pagination';
import ProcessModal from '../modal/processModal'; 
import ManualAddRequest from '../modal/manualAddRequest';
import TSidebar from '../sidebar/transactionSidebar'; 
import RequestItem from './requestItem';
const width = window.innerWidth;


const data=[
    {id:1,date:"September 21, 2023",name: 'Al Ares', request:'Barangay Certificate',status:'Non-Resident'},
    {id:2,date:"September 21, 2023",name: 'Jane Doe', request:'Barangay Certificate',status:'Non-Resident'},
    {id:3,date:"September 21, 2023",name: 'Juan dela Cruz', request:'Barangay Certificate',status:'Resident'},
    {id:4,date:"September 21, 2023",name: 'Anthony Smith', request:'Barangay Certificate',status:'Resident'},
    {id:5,date:"September 21, 2023",name: 'Jason Derulo', request:'Barangay Certificate',status:'Resident'},
    {id:6,date:"September 21, 2023",name: 'Kristine Mae', request:'Barangay Certificate',status:'Resident'},
    {id:1,date:"September 21, 2023",name: 'Al Ares', request:'Barangay Certificate',status:'Non-Resident'},
    {id:2,date:"September 21, 2023",name: 'Jane Doe', request:'Barangay Certificate',status:'Non-Resident'},
    {id:3,date:"September 21, 2023",name: 'Juan dela Cruz', request:'Barangay Certificate',status:'Resident'},
    {id:4,date:"September 21, 2023",name: 'Anthony Smith', request:'Barangay Certificate',status:'Resident'},
    {id:5,date:"September 21, 2023",name: 'Jason Derulo', request:'Barangay Certificate',status:'Resident'},
    {id:6,date:"September 21, 2023",name: 'Kristine Mae', request:'Barangay Certificate',status:'Resident'},
]

export default function Transaction(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(true)
    const [check,setCheck] = useState(false)
    const [checked,setChecked] = useState(false);
    const [show,setShow] = useState(false);
    const [page,setPage]= useState(1);
    const [openManual,setOpenModal] = useState(false);

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
            <Sidebar transactionActive={true} main={true} />
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
                                <TSidebar 
                                    active={true} 
                                    width={width}
                                    setShow={setOpenModal}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests">
                                    <table className="req-table">
                                        <thead className="t-head">
                                           <tr>
                                            {
                                                check ? 
                                                <th>
                                                    <input 
                                                        type="checkbox" 
                                                        checked={checked ?true :false}
                                                        className="req-check"
                                                        onChange={handleCheckAll}
                                                    />
                                                </th>
                                                :null
                                            }
                                                <th>Date</th>
                                                <th>Resident</th>
                                                <th>Request</th>
                                                <th>Classification</th>
                                                <th>Process</th>
                                                <th>Reject</th>
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                         {
                                             data.slice(startIndex,endIndex).map(req=>{
                                                 return <RequestItem 
                                                    request={req}
                                                    status={check}
                                                    checked={checked}
                                                    handleProcess={handleProcess}
                                              />
                                             })
                                         }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="requests-footer">
                                    <div>
                                        <label>Rows per page:</label>
                                        <select>
                                            <option>10</option>
                                            <option>50</option>
                                            <option>100</option>
                                            <option>200</option>
                                            <option>500</option>
                                            <option>1000</option>
                                        </select>
                                    </div>
                                    <Pagination 
                                        count={Math.ceil(data.length/limit)}
                                        page={page} 
                                        variant="outlined" 
                                        shape="rounded" 
                                        onChange={({e,page})=>handleChange(page)}
                                    />
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
        <ManualAddRequest 
            show={openManual}
            setShow={setOpenModal}
        />
    </>
    )
}

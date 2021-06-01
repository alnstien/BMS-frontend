import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import './transaction.css';
import SimpleBar from 'simplebar-react';
import Pagination from '@material-ui/lab/Pagination';
import ProcessModal from '../modal/processModal'; 
import TSidebar from '../sidebar/transactionSidebar'; 
import ListItem from './listItem';
import TNavbar from '../navbar/tnav';
import ManualAddRequest from '../modal/manualAddRequest';

const data=[
    {id:1,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Resident'},
    {id:2,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Resident'},
    {id:1,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Resident'},
    {id:2,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Resident'},
    {id:1,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Resident'},
    {id:2,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Resident'},
    {id:1,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Resident'},
    {id:2,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Resident'},
    {id:1,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Resident'},
    {id:2,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Resident'},
    {id:1,date: "September 7, 2022",name: 'Al Ares', request:'Barangay Certificate',status:'Resident'},
    {id:2,date: "September 7, 2022",name: 'Jane Doe', request:'Barangay Certificate',status:'Resident'},
]

export default function AcceptedTransaction(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(true)
    const [check,setCheck] = useState(false)
    const [checked,setChecked] = useState(false);
    const [show,setShow] = useState(false)
    const [openManual,setOpenModal] = useState(false);

    const width = window.innerWidth;
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
            <Sidebar transactionActive={true}/>
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
                                    acceptedActive={true} 
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
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                         {
                                             data.map(req=>{
                                                 return <ListItem 
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
                                    <Pagination count={10} variant="outlined" shape="rounded" />
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

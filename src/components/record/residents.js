import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/tnav';
import Pagination from '@material-ui/lab/Pagination';
import AddManually from '../modal/addRecordManually';
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

export default function Residents(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(true)
    const [check,setCheck] = useState(false)
    const [checked,setChecked] = useState(false);
    const [show,setShow] = useState(false);
    const [page,setPage]= useState(1);
    const [openModal,setModal] = useState(false)

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
                                    setShow={setModal}
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
                                                <th>
                                                    Purok
                                                </th>
                                                <th>Household Id</th>
                                                <th>Resident's Name</th>
                                                <th>Gender</th>
                                                <th>Action</th>
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
        <AddManually 
            show={openModal}
            setShow={setModal}
        />
    </>
    )
}

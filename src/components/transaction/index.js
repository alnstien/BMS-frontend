import React, { useState,useEffect } from 'react'
import Sidebar from '../sidebar' 
import './transaction.css';
import SimpleBar from 'simplebar-react';
import {FcSearch} from 'react-icons/fc'
import {BiSortAZ,BiSortZA} from 'react-icons/bi'
import {CgMenuLeft,CgTrash} from 'react-icons/cg'
import {MdClose,MdCheckBox,MdIndeterminateCheckBox} from 'react-icons/md'
import Pagination from '@material-ui/lab/Pagination';
    //icons
    const ascIcon = <BiSortAZ size={24} />
    const descIcon = <BiSortZA size={24} />
    const openIcon = <CgMenuLeft size={24} />
    const closeIcon = <MdClose size={24} />
    const trashIcon = <CgTrash size={24}  />
    const checkIcon = <MdCheckBox size={24}  />
    const unCheckIcon = <MdIndeterminateCheckBox size={24} />

function Button({status,fnc,icon1,icon2,style}){

    return(
        <>
        <button
            style={style}
            className="sort-button"
            onClick={fnc}
        >{
            !status 
            ?
            icon1  
            : 
            icon2 
        }</button>
        </>
    )
}

function ListItem({status,request}){

    return(
        <>
            <tr className="tb-tr">
                {
                     status ? 
                        <td>
                            <input 
                                className="req-check"
                                type="checkbox" 
                                value={request.id}
                            />
                        </td>
                    :null
                }
                <td>{request.date}</td>
                <td>{request.name}</td>
                <td>{request.request}</td>
                <td>
                    <div className="request-status-cc">
                        <p
                            style={{color: request.status==='Valid' ? 'green' :'rgb(231, 12, 12)' }}
                        >{request.status}</p>
                    </div>
                </td>
                <td>
                    <button className="process-btn">Process</button>
                </td>
            </tr>
        </>
    )
}


const data=[
    {id:1,date: Date.now(),name: 'Al Ares', request:'Barangay Certificate',status:'Invalid'},
    {id:2,date: Date.now(),name: 'Al Ares1', request:'Barangay Certificate',status:'Invalid'},
    {id:3,date: Date.now(),name: 'Al Ares2', request:'Barangay Certificate',status:'Valid'},
    {id:4,date: Date.now(),name: 'Al Ares3', request:'Barangay Certificate',status:'Valid'},
    {id:5,date: Date.now(),name: 'Al Ares4', request:'Barangay Certificate',status:'Valid'},
    {id:6,date: Date.now(),name: 'Al Ares5', request:'Barangay Certificate',status:'Valid'},
    {id:7,date: Date.now(),name: 'Al Ares6', request:'Barangay Certificate',status:'Valid'},
    {id:1,date: Date.now(),name: 'Al Ares', request:'Barangay Certificate',status:'Valid'},
    {id:2,date: Date.now(),name: 'Al Ares1', request:'Barangay Certificate',status:'Valid'},
    {id:3,date: Date.now(),name: 'Al Ares2', request:'Barangay Certificate',status:'Invalid'},
    {id:4,date: Date.now(),name: 'Al Ares3', request:'Barangay Certificate',status:'Valid'},
    {id:5,date: Date.now(),name: 'Al Ares4', request:'Barangay Certificate',status:'Valid'},
    {id:6,date: Date.now(),name: 'Al Ares5', request:'Barangay Certificate',status:'Valid'},
    {id:7,date: Date.now(),name: 'Al Ares6', request:'Barangay Certificate',status:'Valid'},
]

export default function Transaction(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(false)
    const [check,setCheck] = useState(false)
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


    return (
        <div className="con-container"> 
            <Sidebar transactionActive={true}/>
            <div className="content-wrapper">
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <div className="mynav">
                            <form>
                                {
                                    width <= 700 
                                ? 
                                    <Button
                                    status={isOpen}
                                    fnc={e=>toggleSidebar(e)}
                                    icon1={openIcon}
                                    icon2={closeIcon}
                                    style={{
                                        position:'absolute',
                                        left:0
                                    }}
                                />
                                :
                                    null
                                }
                                <div className="cat-search">
                                    <input
                                        placeholder="Search..."
                                    />
                                    <button><FcSearch size={24} /></button>
                                </div>
                                <div className="cat-selection">
                                    <select>
                                        <option>All</option>
                                        <option>Barangay Certificate</option>
                                            <option>Certificate of Indigency</option>
                                            <option>Letter of Acceptance</option>
                                    </select>
                                </div>
                                <Button 
                                    status={sortAsc}
                                    fnc={e=>handleSort(e)}
                                    icon1={ascIcon}
                                    icon2={descIcon}
                                />
                                <Button 
                                    fnc={e=>alert("delete something")}
                                    status={false}
                                    icon1={trashIcon}
                                />
                                <Button 
                                    fnc={e=>handleCheck(e)}
                                    status={check}
                                    icon1={checkIcon}
                                    icon2={unCheckIcon}
                                />
                            </form>
                        </div>
                        <div className="content-flex">
                            <div className="req-overview"
                                style={{
                                    transition:'.2s',
                                    width: isOpen ? '300px' : 0, minWidth: isOpen ? '300px' : 0,
                                }}
                            >
                            <SimpleBar className="req-overview-holder">
                                    <form>
                                    <div className="search-wrapper">
                                        <input 
                                            placeholder="Search..."
                                        />
                                        <button><FcSearch size={24} /></button>
                                    </div>
                                        <select>
                                            <option>All</option>
                                            <option>Barangay Certificate</option>
                                            <option>Certificate of Indigency</option>
                                            <option>Letter of Acceptance</option>
                                        </select>
                                    </form>
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
                                                        className="req-check"
                                                    />
                                                </th>
                                                :null
                                            }
                                                <th>Date</th>
                                                <th>Resident</th>
                                                <th>Request</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                         {
                                             data.map(req=>{
                                                 return <ListItem 
                                                    request={req}
                                                    status={check}
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
    )
}

import React, { useState,useEffect } from 'react'
import Sidebar from '../sidebar' 
import './transaction.css';
import SimpleBar from 'simplebar-react';
import {FcSearch} from 'react-icons/fc'
import {BiSortAZ,BiSortZA} from 'react-icons/bi'
import {CgMenuLeft} from 'react-icons/cg'
import {MdClose} from 'react-icons/md'


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




export default function Transaction(props) {
    const [sortAsc,setSortAsc] = useState(false)
    const [isOpen,setOpen] = useState(false)

    const toggleSidebar=(e)=>{
        e.preventDefault();
        setOpen(!isOpen)
    }
    const handleSort=(e)=>{
        e.preventDefault();
        setSortAsc(!sortAsc)

    }

    //icons
    const ascIcon = <BiSortAZ size={24} />
    const descIcon = <BiSortZA size={24} />
    const openIcon = <CgMenuLeft size={24} />
    const closeIcon = <MdClose size={24} />
    return (
        <div className="con-container"> 
            <Sidebar transactionActive={true}/>
            <div className="content-wrapper">
              
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <div className="mynav">
                            <form>
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
                                <Button 
                                    status={sortAsc}
                                    fnc={e=>handleSort(e)}
                                    icon1={ascIcon}
                                    icon2={descIcon}
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
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

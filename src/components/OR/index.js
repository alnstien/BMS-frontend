import React, { useState,useEffect,useCallback } from 'react'
import SimpleBar from 'simplebar-react';
import  {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import './or.css';
import PostSidebar from '../sidebar/postAnnouncementSidebar'; 
import Sidebar from '../sidebar' 
import SNavbar from '../navbar/snav';
import {Typography} from '@material-ui/core'
import Modal from '../modal/addOrModal';
import Pagination from '@material-ui/lab/Pagination';
import ListItem from './listItem';


const width = window.innerWidth;

const data=[
    {id:1, date:'September 11, 2021', number:'001-21',status:"Used"},
    {id:2, date:'September 11, 2021', number:'001-22',status:"Used"},
    {id:3, date:'September 11, 2021', number:'001-23',status:"Available"},
    {id:4, date:'September 11, 2021', number:'001-24',status:"Available"},
    {id:5, date:'September 11, 2021', number:'001-25',status:"Available"},
    {id:6, date:'September 11, 2021', number:'001-26',status:"Available"}
]


export default function OR(props) {
    const [isOpen,setOpen] = useState(true)
    const [openModal,setOpenModal] = useState(false);
    const [isSuper,setIsSuper] = useState(false)

    const checkUser=async()=>{
      const user = await localStorage.getItem('user');
      console.log(user)
      if(user==='superadmin'){
        setIsSuper(true)
      }
    }

    useEffect(()=>{
        checkUser();
        return()=>{
            setIsSuper(false)
        }
    },[])

    const toggleSidebar=(e)=>{
        e.preventDefault();
        setOpen(prevOpen=>!prevOpen)
    }

    
    return (
        <div className="con-container"> 
            <Sidebar orActive={true} isSuper={isSuper} />
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
                                <PostSidebar
                                    active={true} 
                                    orActive={true}
                                    show={openModal}
                                    setShow={setOpenModal}
                                    width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                {/* content goes here */}
                                <form className="requests-view">
                                    <div className="request-header">
                                        <Typography><b>Overall Offial Reciepts</b></Typography>
                                    </div>
                                    <div className="request-body">
                                    <table className="req-table">
                                        <thead className="t-head">
                                            <tr>
                                                <th>
                                                    #
                                                </th>
                                                <th>Date Added</th>
                                                <th>Number</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="t-body">
                                         {
                                             data.map((list,index)=>{
                                                 return <ListItem 
                                                    list={list}
                                                    key={index}
                                              />
                                             })
                                         }
                                        </tbody>
                                    </table>
                                    </div>
                                    <div className="sticky-footer">
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
                                            count={3}
                                            page={1} 
                                            variant="outlined" 
                                            shape="rounded" 
                                        />
                                    </div>
                                </form>
                                {/* end of content*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={openModal} setShow={setOpenModal} />
        </div>
    )
}

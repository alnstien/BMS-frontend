import React, { useState,useEffect,useCallback } from 'react';
import {Link} from 'react-router-dom';
import {Button,Typography} from '@material-ui/core';
import Sidebar from '../sidebar' 
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/snav';
import RSidebar from '../sidebar/recordSidebar'; 
import ListItem from './purokMemberList';
import Pagination from '@material-ui/lab/Pagination';

const width = window.innerWidth;

const data=[
    {id:1, name:'Al Ares', role:'President' },
    {id:2, name:'Al Ares', role:'Vice-President' },
    {id:3, name:'Al Ares', role:'Secretary' },
    {id:4, name:'Al Ares', role:'Treasurer' },
    {id:5, name:'Al Ares', role:'Auditor' },
    {id:6, name:'Al Ares', role:'P.I.O' },
    {id:7, name:'Al Ares', role:'B.H.W' },
    {id:8, name:'Al Ares', role:'B.H.W' },
    {id:9, name:'Al Ares', role:'Barangay Kagawad' },
    {id:10, name:'Al Ares', role:'Member' },
    {id:11, name:'Al Ares', role:'Member' },
    {id:12, name:'Al Ares', role:'Member' },
    {id:13, name:'Al Ares', role:'Member' },
    {id:14, name:'Al Ares', role:'Member' },
    {id:15, name:'Al Ares', role:'Member' },
    {id:16, name:'Al Ares', role:'Member' },
    {id:17, name:'Al Ares', role:'Member' },
    {id:18, name:'Al Ares', role:'Member' },
    {id:19, name:'Al Ares', role:'Member' },
    {id:20, name:'Al Ares', role:'Member' },
    {id:21, name:'Al Ares', role:'Member' },
    {id:22, name:'Al Ares', role:'Member' },
    {id:23, name:'Al Ares', role:'Member' },
]

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
                                <form className="requests-view">
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
                                    <table className="req-table">
                                        <thead className="t-head">
                                            <tr>
                                                <th>
                                                    #
                                                </th>
                                                <th>Name</th>
                                                <th>Role</th>
                                                <th>Action</th>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

import React, { useState,useEffect,useCallback } from 'react';
import {Link} from 'react-router-dom';
import {Button,Typography} from '@material-ui/core';
import {FaFileExport} from 'react-icons/fa'
import Sidebar from '../sidebar' 
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/snav';
import TSidebar from '../sidebar/transactionSidebar'; 
import ListItem from './viewReportList';
import Pagination from '@material-ui/lab/Pagination';

const width = window.innerWidth;

const data=[
    {id:1, resident:'Al Ares',request:'Certification Of Indegency', status:'Served',Or:'001-0021'},

]

export default function ViewReport(props) {
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
                                   reportsActive={true} 
                                   width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <form className="requests-view">
                                    <div className="request-header">
                                        <Link to='/requests/reports'>
                                            <Button 
                                                style={{marginRight:10}}
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Back
                                            </Button>
                                        </Link>
                                        <Typography><b>Purok:</b> Purok 1</Typography>
                                        <Button style={{
                                            position:'absolute',
                                            right:0,
                                            margin:10
                                        }}>
                                            Export
                                            <FaFileExport size={22} />
                                        </Button>
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
                                                <th>O.R. Number</th>
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

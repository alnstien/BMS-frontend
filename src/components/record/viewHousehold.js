import React, { useState,useEffect,useCallback } from 'react'
import Sidebar from '../sidebar' 
import './index.css';
import {Link} from 'react-router-dom';
import {Typography,Button} from '@material-ui/core'
import SimpleBar from 'simplebar-react';
import TNavbar from '../navbar/snav';
import ProcessModal from '../modal/processModal'; 
import RSidebar from '../sidebar/recordSidebar'; 
import ListItem from './householdMemberList';
import Pagination from '@material-ui/lab/Pagination';


const width = window.innerWidth;
const data=[
    {id:1, name:'John Doe',gender:'Male'},
    {id:2, name:'Jane Doe',gender:'Female'},
    {id:3, name:'Justin Doe',gender:'Male'},
    {id:4, name:'Johansen Doe',gender:'Male'},
    
]

export default function ViewHousehold(props) {
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
                                    active={true} 
                                    width={width}
                                />
                            </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                <div className="requests-view">
                                    <div className="request-header">
                                        <Link to='/records'>
                                            <Button 
                                                style={{marginRight:10}}
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Back
                                            </Button>
                                        </Link>
                                        <Typography><b>Household ID:</b> HSE-15456565658</Typography>
                                    </div>
                                    <div className="request-body">
                                        <table className="req-table">
                                            <thead className="t-head">
                                                <tr>
                                                    <th>
                                                        #
                                                    </th>
                                                    <th>Name</th>
                                                    <th>Gender</th>
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
                                                count={1}
                                                page={1} 
                                                variant="outlined" 
                                                shape="rounded" 
                                            />
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

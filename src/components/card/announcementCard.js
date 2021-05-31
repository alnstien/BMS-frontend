import React,{useState,useRef,useEffect} from 'react'
import { Typography } from '@material-ui/core';
import ClickOutsideHandler from '../../config/clickOutsideHandler';
import {FaEllipsisH} from 'react-icons/fa';
import {BsTrash} from 'react-icons/bs';
import {MdEdit} from 'react-icons/md';




export default function Event({auth}){
    const DropdownRef = useRef();
    const [showOption,setShowOption] = useState(false);

    //handling clicking outside of the option
    ClickOutsideHandler(DropdownRef,useEffect,setShowOption);


   return(
       <>
        <div className="post-wrapper">
            {
            !auth ? null
            : 
            <div className="dropdown-nav ft m-15" ref={DropdownRef}>
                <div className="dropdown-content">
                    <button 
                        className="dropdown-btn" 
                        onClick={()=>setShowOption(!showOption)}
                    >
                        <FaEllipsisH size={18} color="gray" />
                    </button>
                    <div className="dropdown-content-nav" 
                        style={{
                            display: showOption  ?"block" : "none"
                        }}
                    >
                        <button className="dropdown-links" >
                            <span><BsTrash /></span> 
                            Delete
                        </button>
                        <button className="dropdown-links" >
                            <span><MdEdit /></span> 
                            Edit
                        </button>
                    </div>
                </div>
            </div> 
            }
            <div className="post-wrapper-header">
                <Typography>Jane Doe</Typography>
                <small>Yesterday at 5:36 PM</small>
            </div>
            <div className="post-wrapper-body">
                <Typography>
                Hello User, we are so thankful for having you in our online platform. 
Feel free to let us know your concerns.
                </Typography>
            </div>
        </div>
       </>
   ) 
}


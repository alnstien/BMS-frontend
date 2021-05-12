import React,{useEffect, useRef,useState} from 'react'
import './post.css'
import {IoMdMore,IoMdHeart} from 'react-icons/io'
import {BiCommentDetail,BiTrash} from 'react-icons/bi'
import {HiPencil} from 'react-icons/hi'
import Img from '../../assets/default.jpg'
import { Typography } from '@material-ui/core';
import Image from '../../assets/avatar.jpg'
import ClickOutsideHandler from '../../config/clickOutsideHandler';


export default function Post({text,image}) {

    const [showOption,setShowOption] = useState(false)
    const DropdownRef = useRef()

    ClickOutsideHandler(DropdownRef,useEffect,setShowOption);


    return (
        <div className="post-wrapper">
            <div className="post-profile-details">
                <div className="post-avatar-wrapper">
                    <img src={Image} alt=""/>
                </div>
                <div>
                    <h5>John Die</h5>
                    <small>September 5 at 4:30 P.M.</small>
                </div>
                <div className="dropdown-nav" ref={DropdownRef}>
             <div className="dropdown-content">
             <button 
                className="dropdown-btn" 
                onClick={()=>setShowOption(!showOption)}
            >
                <IoMdMore size={24} color={"#FF3377"} />
             </button>
            <div className="dropdown-content-nav" 
                style={{
                    display: showOption  ?"block" : "none"
                }}>
                    <>
                    <button className="dropdown-links" ><span><BiTrash /></span> Delete</button>
                    <button 
                        className="dropdown-links"
                    >
                    <span><HiPencil /></span>
                     Edit
                    </button>
                    </>
                </div>
            </div>
            </div> 
            </div>
            <div className="post-content-wrapper">
                <Typography>{text}</Typography>
                {
                    !image ? null : <img className="post-content-img" src={Img} alt=""/>
                }
            </div>
            {/* <div className="post-card-footer">
                <div className="post-card-info">
                    <button><IoMdHeart size={25} color={'gray'} /></button>
                    <small>11k</small>
                </div>
                <div className="post-card-info">
                    <button><BiCommentDetail size={22} /></button>
                    <small>11k</small>
                </div>
            </div> */}
            <div className="comment-wrapper">
                <Comment />
                <Comment />
            </div>
            <form className="post-reply-form">
                    <input 
                        className="post-reply-input"
                        placeholder="Reply..."
                    />
            </form>
        </div>
    )
}

function Comment(){

    return(
        <>
            <div className="comment">
                <div className="comment-header">
                    <h5>John Doe</h5>
                    <small>Yesterday at 5:50 PM </small>
                </div>
                <div className="comment-body">
                    <Typography style={{fontSize: 15}}>This is a sample comment.</Typography>
                </div>
            </div>
        </>
    )
}

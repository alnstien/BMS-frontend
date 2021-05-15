import React,{useEffect, useRef,useState} from 'react'
import './post.css'
import {IoMdMore} from 'react-icons/io'
import {BsDownload} from 'react-icons/bs'
import qr from '../../assets/qr.png'
import {BiTrash} from 'react-icons/bi'
import ClickOutsideHandler from '../../config/clickOutsideHandler';
import { Typography } from '@material-ui/core'
import { width } from '../../config/setup'

function RenderStatus({status}){
    const [color,setColor] = useState('');

    useEffect(()=>{
        if(status==="Success"){
            setColor('green')
        }else if(status==="Pending"){
            setColor('orange')
        }else{
            setColor('#F93F3F')
        }
    },[])

    return(
        <Typography
            style={{color:color,fontWeight:'bold',marginTop:10}}
        >
        {
            status
        }
        </Typography>
    )
}



export default function Post({request}) {

    const [showOption,setShowOption] = useState(false)
    const DropdownRef = useRef()

    ClickOutsideHandler(DropdownRef,useEffect,setShowOption);

   
   


    return (
        <div className="post-wrapper">
            <div className="post-profile-details">
                <div className="post-logo-holder">
                    <div className="qr-code">
                        <img src={qr} alt=""/>
                    </div>
                    <RenderStatus status={request.status} />
                </div>
                <div className="post-content">
                    <Typography
                        variant="h6"
                    >
                        {request.type}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        Issued to: {request.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        Issued on: {request.date}
                    </Typography>
                    {
                        request.status==="Success" ?
                            <button
                                className="download-btn"
                            >
                                <BsDownload size={24} />
                                {
                                    width <=700 ? null: 
                                    <Typography style={{marginLeft:10}}>Download</Typography>
                                }
                            </button>
                        :
                        null
                    }
                </div>
                <div className="dropdown-nav ft m-15" ref={DropdownRef}>
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
                            }}
                        >
                            <button className="dropdown-links" >
                                <span><BiTrash color="red" /></span> 
                                Delete
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
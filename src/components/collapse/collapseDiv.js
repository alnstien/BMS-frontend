import { TextField, Typography } from '@material-ui/core';
import React,{useState,useRef,useEffect} from 'react'
import ClickOutsideHandler from '../../config/clickOutsideHandler';
import {IoIosArrowDown} from 'react-icons/io'
import {BsTrashFill} from 'react-icons/bs'
import {MdModeEdit} from 'react-icons/md'

export default function CollapseDiv({member}) {

    
    return (
    <div className="flex-div" >
        <div className="collapse-div-heading">
            <div className="collapse-div-heading-header">
                <Typography variant="body1">{member.role}</Typography>
            </div>
            <div>
                <CollapseField 
                    member={member}
                />
            </div>
        </div>
    </div>
    )
}

function CollapseField({member}){
    const [show,setShow] = useState(false)
    const myRef = useRef();
    //clicking outside element handler
    ClickOutsideHandler(myRef,useEffect,setShow)

    const toggleShow=(e)=>{
        e.preventDefault()
        setShow(!show)
      }

    const styles = {
        collapseStyle:{
            height: show ? "200px" : 0,
            padding: show ? "10px": 0,
            transition:'.1s',
            border: show ? "1px solid lightgray": null
        },
        toggleButton:{
            
        }
    }


    return(
        <>
        <div  ref={myRef}>
            <div className="collapse-div-heading-content">
                <TextField 
                    id="outlined-basic" 
                    variant="outlined"
                    color="secondary"
                    value={member.name}
                    disabled={true}
                    className="collapse-input"
                />
                <button 
                    className="collapse-btn"
                    onClick={e=>toggleShow(e)}
                >
                    <span 
                        style={{
                            transition:".2s",
                            transform: show ? 'rotate(180deg)' : null
                        }}
                    >
                        <IoIosArrowDown size={24}/>
                    </span>
                </button>
                <button 
                    className="collapse-btn"
                    // onClick={e=>toggleShow(e)}
                >
                    <MdModeEdit size={24} color="#5924F0" />
                </button>
                <button 
                    className="collapse-btn"
                    // onClick={e=>toggleShow(e)}
                >
                    <BsTrashFill size={24} color="#EE155E" />
                </button>
            </div>
            <div 
                className="collapse-div-body"
                style={styles.collapseStyle}
            >   <div className="collapse-div-body-header">
                    <Typography variant="h6">Additional Household Member Information</Typography>
                </div>
                 <Typography variant="body2">Age: <b>{member.age}</b></Typography>
                 <Typography variant="body2">Gender: <b>{member.gender}</b></Typography>
                 <Typography variant="body2">Birthdate: <b>{member.bdate}</b> </Typography>
            </div>
        </div>
        </>
    )
}
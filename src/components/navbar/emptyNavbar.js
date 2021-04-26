import React,{useState,useRef} from 'react';
import './empty.css';
import {FiLogOut} from 'react-icons/fi'


export default function EmptyNavbar() {
    let DropdownRef=useRef();
    const user = true;
    const [showOption,setShowOption]=useState(false);

    return (
        <div className="navbar-dummy">
            <div className="brgy-logo">
                
            </div>
            {/* <button className="logout-btn"><FiLogOut size={22} color={'#fff'} /></button> */}
        </div>
    )
}
{/* <div className="dropdown-nav" ref={DropdownRef}>
             <div className="dropdown-content">
             <button className="dropdown-btn" onClick={()=>setShowOption(!showOption)}>show</button>
            <div className="dropdown-content-nav" 
                style={{
                    display: showOption  ?"block" : "none"
                }}>
                    <>
                    <button className="dropdown-links" ><span>del</span> Delete</button>
                    <button className="dropdown-links"><span>edit</span> Edit</button>
                    </>
                </div>
            </div>
            </div>  */}
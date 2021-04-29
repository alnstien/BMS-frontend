import React,{useState,useRef} from 'react';
import './empty.css';
import Logo from '../../assets/logo.png';


export default function EmptyNavbar() {
    let DropdownRef=useRef();
    const user = true;
    const [showOption,setShowOption]=useState(false);

    return (
        <div className="navbar-dummy">
            <div className="brgy-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-location">
                <h5>Municipality of Ramon Magsaysay</h5>
                <small>Zamboanga del Sur</small>
                <small>Region IX</small>
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
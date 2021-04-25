import { FormGroup } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './option.css'
import {BsSearch} from 'react-icons/bs'

function Button(){

    return(
        <button className="option-nav-btn">
            0
        </button>
    )
}

export default function Option() {
    const [toggle,setToggle] = useState(false);
    const width = window.innerWidth;

    useEffect(()=>{

        if(width > 700){
            setToggle(true)
        }
    },[])

    useEffect((e)=>{
        console.log(e)
    },[])

    const handleToggle=(e)=>{
        e.preventDefault();
        return setToggle(prevToggle=>!prevToggle);
    }
    return (
        <div className="option-nav">
            <form>
                {/* <Button />
                <Button />
                <Button /> */}
                <div 
                    className="custom-search-wrapper"
                    style={{
                        paddingLeft: toggle ? 10 : 0,
                    }}>
                    {
                        toggle ? 
                        <input 
                        style={{
                            minWidth: !toggle ? 0 : width > 400 ? '300px' : '150px', 
                         
                        }}
                            className="custom-search-input" 
                            placeholder="Search..."
                        />
                        :null
                    }
                    <button 
                        style={{
                            marginLeft: toggle ? 10 : 0
                        }}
                        className="custom-search-btn" 
                        onClick={handleToggle}
                    ><BsSearch size={22} /></button>
                </div>
            </form>
        </div>
    )
}

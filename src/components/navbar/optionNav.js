import { FormGroup } from '@material-ui/core'
import React, { useState } from 'react'
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

    const handleToggle=(e)=>{
        e.preventDefault();
        return setToggle(prevToggle=>!prevToggle);
    }
    return (
        <div className="option-nav">
            <form>
                <Button />
                <Button />
                <Button />
                <div 
                    className="custom-search-wrapper"
                    style={{
                        minWidth: !toggle ? 0 : '300px', 
                        paddingLeft: toggle ? 10 : 0
                    }} >
                    {
                        toggle ? 
                        <input 
                            className="custom-search-input" 
                            placeholder="Search..."
                        />
                        :null
                    }
                    <button 
                        className="custom-search-btn" 
                        onClick={handleToggle}
                    ><BsSearch size={22} /></button>
                </div>
            </form>
        </div>
    )
}

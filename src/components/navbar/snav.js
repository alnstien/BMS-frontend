import React from 'react'
import {CgMenuLeft,CgTrash} from 'react-icons/cg'
import {MdClose} from 'react-icons/md'


const openIcon = <CgMenuLeft size={24} color={'#fa72a0'} />
const closeIcon = <MdClose size={24} color={'#fa72a0'} />



function Button({status,fnc,icon1,icon2,style}){

    return(
        <>
        <button
            style={style}
            className="sort-button"
            onClick={fnc}
        >{
            !status 
            ?
            icon1  
            : 
            icon2 
        }</button>
        </>
    )
}


export default function Navbar({toggleSidebar,handleSort,handleCheck,isOpen,sortAsc,check}) {
    return (
        <div className="mynav">
            <form>
                <Button
                    status={isOpen}
                    fnc={e=>toggleSidebar(e)}
                    icon1={openIcon}
                    icon2={closeIcon}
                    style={{
                        position:'absolute',
                        left:0
                    }}
                />
            </form>
        </div>
    )
}

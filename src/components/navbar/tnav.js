import React from 'react'
import {FcSearch} from 'react-icons/fc'
import {BiSortAZ,BiSortZA} from 'react-icons/bi'
import {CgMenuLeft,CgTrash} from 'react-icons/cg'
import {MdClose,MdCheckBox,MdIndeterminateCheckBox} from 'react-icons/md'



const ascIcon = <BiSortAZ size={24} />
const descIcon = <BiSortZA size={24} />
const openIcon = <CgMenuLeft size={24} color={'#fa72a0'} />
const closeIcon = <MdClose size={24} color={'#fa72a0'} />
const trashIcon = <CgTrash size={24}  />
const checkIcon = <MdCheckBox size={24}  />
const unCheckIcon = <MdIndeterminateCheckBox size={24} />


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
                <div className="cat-search">
                    <input
                        placeholder="Search..."
                    />
                    <button><FcSearch size={24} /></button>
                </div>
                <div className="cat-selection">
                    <select>
                        <option>All</option>
                        <option>Barangay Certificate</option>
                            <option>Certificate of Indigency</option>
                            <option>Letter of Acceptance</option>
                    </select>
                </div>
                <Button 
                    status={sortAsc}
                    fnc={e=>handleSort(e)}
                    icon1={ascIcon}
                    icon2={descIcon}
                />
                <Button 
                    fnc={e=>alert("delete something")}
                    status={false}
                    icon1={trashIcon}
                />
                <Button 
                    fnc={e=>handleCheck(e)}
                    status={check}
                    icon1={checkIcon}
                    icon2={unCheckIcon}
                />
        </form>
    </div>
    )
}

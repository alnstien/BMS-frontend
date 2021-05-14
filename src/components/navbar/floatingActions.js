import React from 'react'
import {PNButton} from './phoneNavbar'
import {FaCertificate} from 'react-icons/fa'

export default function FloatingActions({setShow}) {

    const handleShowModal=(fn)=>{
        fn(true);
    }
    const certIcon = <FaCertificate size={22}  color={'#fff'}  />
    return (
        <div className="floating-wrapper">
            <PNButton 
                icon={certIcon}
                color={'#E05304'}
                fnc={()=>handleShowModal(setShow)}
            />
        </div>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'
import {PNButton} from './phoneNavbar'
import {FaCertificate} from 'react-icons/fa'

export default function FloatingActions({setShow}) {

    const handleShowModal=(fn)=>{
        fn(true);
    }
    const certIcon = <FaCertificate size={22}  color={'#fff'}  />
    return (
        <div className="floating-wrapper">
        <Link to="/user/certificates">
            <PNButton 
                icon={certIcon}
                color={'#E05304'}
            />
            </Link>
        </div>
    )
}

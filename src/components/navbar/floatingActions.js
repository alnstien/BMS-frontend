import React from 'react'
import {PNButton} from './phoneNavbar'
import {AiOutlinePlus} from 'react-icons/ai'
import {FaCertificate} from 'react-icons/fa'
import {BiFile} from 'react-icons/bi'

export default function FloatingActions({setShowCreatePostModal,setShow,setShowComplain}) {

    const handleShowModal=(fn)=>{
        fn(true);
    }
    const postIcon = <AiOutlinePlus size={22}  color={'#fff'} />;
    const certIcon = <FaCertificate size={22}  color={'#fff'}  />
    const fileIcon = <BiFile size={22}  color={'#fff'}  />

    return (
        <div className="floating-wrapper">
             <PNButton 
                icon={postIcon}
                color={'green'}
                fnc={()=>handleShowModal(setShowCreatePostModal)}
            />
            <PNButton 
                icon={certIcon}
                color={'#E05304'}
                fnc={()=>handleShowModal(setShow)}
            />
            <PNButton 
                icon={fileIcon}
                color={'#52389A'}
                fnc={()=>handleShowModal(setShowComplain)}
            />
        </div>
    )
}

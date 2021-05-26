import React from 'react'
import {Link} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import {AiOutlineRight} from 'react-icons/ai'


export default function SettingSidebar({width,active,purokActive,residentActive}) {


    return (
        <form>
        <Link 
            className={ active ? 
                'form-a-active': 'form-a-default'}
            to="/settings">
                General Settings
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={ purokActive ? 
                'form-a-active': 'form-a-default'}
            to="/settings">
                Account Settings
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={ residentActive ? 
                'form-a-active': 'form-a-default'}
            to="/settings">
               Miscellaneous Settings
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
    </form>
    )
}

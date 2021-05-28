import React from 'react'
import {Link} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import {AiOutlineRight} from 'react-icons/ai'


export default function TSidebar({width,active,holdActive,historyActive,acceptedActive}) {


    return (
        <form>
        {
            width <= 700 ?
            <>
                <div className="search-wrapper">
                    <input 
                        placeholder="Search..."
                    />
                    <button><FcSearch size={24} /></button>
                </div>
                <select>
                    <option>All</option>
                    <option>Barangay Certificate</option>
                    <option>Certificate of Indigency</option>
                    <option>Letter of Acceptance</option>
                </select>
                </>
                :
            null
        }
        <Link 
            className={ active ? 
                'form-a-active': 'form-a-default'}
            to="/requests">
                All Requests 
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={acceptedActive ? 'form-a-active':'form-a-default'}
            to="/requests/accepted">Accepted Requests 
            <span 
                className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={holdActive ? 'form-a-active':'form-a-default'}
            to="/requests/hold">Rejected Requests 
            <span 
                className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={historyActive ? 'form-a-active':'form-a-default'}
            to="/requests/history">History 
            <span 
                className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
    </form>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import {AiOutlineRight} from 'react-icons/ai'


export default function SettingSidebar({width,active,purokActive,residentActive}) {


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
            to="/records">
                Household's Records
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={ purokActive ? 
                'form-a-active': 'form-a-default'}
            to="/records/purok">
                Purok
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={ residentActive ? 
                'form-a-active': 'form-a-default'}
            to="/records/residents">
                Resident's Records
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        {/* <Link 
            className={holdActive ? 'form-a-active':'form-a-default'}
            to="/records/residents">Purok 
            <span 
                className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={releaseActive ? 'form-a-active':'form-a-default'}
            to="/records/residents">On-Progress Requests 
            <span 
                className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={historyActive ? 'form-a-active':'form-a-default'}
            to="/records/residents">Transaction History 
            <span 
                className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link> */}
    </form>
    )
}

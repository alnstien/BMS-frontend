import React from 'react'
import Sidebar from '../sidebar' 
import './transaction.css';
import SimpleBar from 'simplebar-react';
import {FcSearch} from 'react-icons/fc'

export default function Transaction(props) {

    return (
        <div className="con-container"> 
            <Sidebar transactionActive={true}/>
            <div className="content-wrapper">
              
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <div className="mynav">
                                   
                        </div>
                        <div className="content-flex">
                            <div className="req-overview">
                                <SimpleBar className="req-overview-holder">
                                    <form>
                                    <div className="search-wrapper">
                                        <input 
                                            placeholder="Search..."
                                        />
                                        <button><FcSearch size={25} /></button>
                                    </div>
                                        <select>
                                            <option>All</option>
                                            <option>Barangay Certificate</option>
                                            <option>Certificate of Indigency</option>
                                            <option>Letter of Acceptance</option>
                                        </select>
                                        
                                    </form>
                                </SimpleBar>
                            </div>
                            <div className="req-wrapper">
                                dwdwd
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Sidebar from '../sidebar' 
import './transaction.css';
import SimpleBar from 'simplebar-react';


export default function Transaction(props) {

    return (
        <div className="con-container"> 
            <Sidebar transactionActive={true}/>
            <div className="content-wrapper">
              
                <div className="main-content-wrapper">
                    <div className="content-main-holder">
                        <div className="content-flex">
                            <div className="req-wrapper">
                                <div className="mynav">
                                    <form>
                                        <select>
                                            <option>All</option>
                                            <option>Barangay Certificate</option>
                                            <option>Certificate of Indigency</option>
                                            <option>Letter of Acceptance</option>
                                        </select>
                                        <input 
                                                placeholder="Search..."
                                        />
                                    </form>
                                </div>
                            </div>
                            <div className="req-overview">
                                <SimpleBar className="req-overview-holder">
                                    
                                </SimpleBar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

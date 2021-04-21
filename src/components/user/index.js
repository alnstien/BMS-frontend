import React from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



 
 
export default function User(props) {

    return (
        <>
         <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    homeActive ={true}
                />
            </div>
            <div className="user-wrapper">
                <div className="user-root">
                    <div className="post-wrapper">
                      <div className="post-profile-details">
                        <div className="post-avatar-wrapper">

                        </div>
                      </div>
                    </div>
                    <div className="post-wrapper">

                    </div>
                    <div className="post-wrapper">

                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

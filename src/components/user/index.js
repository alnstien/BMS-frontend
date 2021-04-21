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
            <div className="user-container">
                <Sidebar
                    homeActive={true}
                />
                <div className="user-wrapper">
                    
                </div>
            </div>
          </div>
      </>
    )
}

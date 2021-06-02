import React, { useState } from 'react'
import Modal from 'react-modal'
import './processmodal.css';
import Swal from 'sweetalert2'
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'
import {Typography,Button,Stepper,StepLabel,Step, FormControl, TextField} from '@material-ui/core'
import ProImg from '../../assets/avatar.jpg'
import ProQR from '../../assets/qr.png'
import ORImage from '../../assets/or.png'
import { makeStyles } from '@material-ui/core/styles';
import {FaCheck,FaTimes} from 'react-icons/fa'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    position:'relative',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function UserInformation(){

    return(
        <div className="modal-process-header">
            <div className="process-user-info">
                <img src={ProImg} alt="" />
                <div className="process-user-info-content">
                    <div className="process-user-classification">
                        <p>Resident</p>
                    </div>
                    <Typography variant="h5">BARANGAY CERTIFICATE</Typography>
                    <Typography color="textSecondary"><b>Date: </b>September 12, 2022</Typography>
                    <Typography><b>Name: </b>Jane Doe</Typography>
                    <Typography><b>Purok: </b>Purok 1</Typography>
                    <Typography><b>Household Number: </b>HSE-5687846868-12</Typography>
                </div>
            </div>
            <div className="process-user-qr">
                <form>
                    <img 
                        src={ProQR}
                        className="process-qr-code"
                        alt="" 
                    />
                    <button className="mt-5">Download QR Code</button>
                </form>
            </div>
        </div>
    )
}

function UserRequirements(){

    return(
            <form className="modal-process-header inline-column">
                <div className="inline-column mt-10">
                    <Typography>2 Files Attached</Typography>
                    <a href={ORImage} target="_blank">Photo of Issued OR</a>
                    <a href={ProImg} target="_blank">Photo of Purok Clearance</a>
                </div>
                <div className="inline">
                <FormControl style={{marginTop:30}}>
                    <Typography variant="body1">Check O.R. Number: </Typography>
                    <div className="centered">
                        <TextField 
                            style={{marginRight:10}}
                            variant="outlined"
                            color="secondary"
                            required={true}
                        />
                        <Typography>
                            <FaTimes color="red" size={25} />
                            {/* <FaCheck color="green" size={25} /> */}
                        </Typography>
                        <Typography style={{color:'red'}}>
                            No O.R. Found
                        </Typography>
                    </div>
                </FormControl>
                </div>
            </form>
        )
}




function getSteps() {
  return ['Resident Information','Requirements Verification', 'Complete Transaction'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <UserInformation />;
    case 1:
      return <UserRequirements />;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}



export default function CreatePostModal({show,setShow}) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();



const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


    const handleAlert=()=>{
        Swal.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'   
    )
    }
  return (
      <Modal isOpen={show}
        style={{
            overlay: fulloverlay,
            content: content
        }}
     >
        <div className="flex-modal">
            <div className="flex-modal-header-sticky">
                <button
                    className="modal-close"
                    onClick={()=>setShow(!show)}
                >&times;</button>
            </div>
            <div className="flex-modal-content">
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                        <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                    ) : (
                    <div style={{
                        width:'100%',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        flexDirection:'column'
                    }}>
                        {getStepContent(activeStep)}
                        <div style={{
                            display:'flex',
                            justifyContent:'space-between',
                            width:'100%',
                            padding:'10px',
                            position:'sticky',
                            bottom:0
                        }}>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                            variant="contained"
                        >
                            Back
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        </div>
                    </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
     </Modal>
    )
}

                // <div className="modal-process-header">
                //     <div className="process-user-info">
                //         <img src={ProImg} alt="" />
                //         <div className="process-user-info-content">
                //             <div className="process-user-classification">
                //                 <p>Resident</p>
                //             </div>
                //             <Typography variant="h5">BARANGAY CERTIFICATE</Typography>
                //             <Typography color="textSecondary"><b>Date: </b>September 12, 2022</Typography>
                //             <Typography><b>Name: </b>Jane Doe</Typography>
                //             <Typography><b>Purok: </b>Purok 1</Typography>
                //             <Typography><b>Household Number: </b>HSE-5687846868-12</Typography>
                //         </div>
                //     </div>
                //     <div className="process-user-qr">
                //        <form>
                //            <img 
                //                 src={ProQR}
                //                 className="process-qr-code"
                //                 alt="" 
                //             />
                //            <button className="mt-5">Download QR Code</button>
                //        </form>
                //     </div>
                // </div>
                // <div className="modal-process-header">
                //     <div className="inline-column mt-10">
                //         <Typography variant="h5" color="secondary">Requirement/s Verification</Typography>
                //         <Typography>2 Files Attached</Typography>
                //         <a href={ORImage} target="_blank">Photo of Issued OR</a>
                //         <a href={ProImg} target="_blank">Photo of Purok Clearance</a>
                //     </div>
                // </div>
                // <div className="modal-process-footer mt-10">
                //     <div className="inline-column mt-10">
                //         <Typography variant="h5">Upload your Files</Typography>
                //     </div>
                // </div>
import React, { useState } from 'react';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import './certificate.css';
import { FormGroup, Typography,MenuItem,FormControl,InputLabel,Select,TextField } from '@material-ui/core';
import RequirementCard from '../card/requirementsCard';


export default function Certificate(props) {
  const screenWidth = window.innerWidth;
  const [others,setOthers] = useState(false);
  const [issuedName,setIssueName] = useState(false);
  const [approval,setApproval] = useState(false)
  const [acceptance,setAcceptance] = useState(false)
  const [land,setLand] = useState(false)


  const handleSelect=(e)=>{
    if(e.target.value==="others"){
      setOthers(true)
      setApproval(false);
      setAcceptance(false)
      setLand(false)
    }else if(e.target.value==="certificate_of_cutting_trees"){
      setApproval(true);
      setOthers(false)
      setLand(false)
      setAcceptance(false)
    }else if(e.target.value==="letter_of_acceptance"){
      setAcceptance(true)
      setApproval(false);
      setOthers(false)
      setLand(false)
    }else if(e.target.value==="barangay_certification_of_land_ownership"){
      setAcceptance(false)
      setLand(true)
      setApproval(false);
      setOthers(false)
    }else{
      setOthers(false)
      setApproval(false);
      setAcceptance(false)
      setLand(false)
    }
}
    return (
        <>
         <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                  certificateActive ={true}
                />
            </div>
            <div className="user-wrapper">
              {
                screenWidth <= 700 ? 
                <PhoneNav 
                  certificateActive ={true}
              />
              :null
              }
              <div className="user-root">
                {/* ========================content goes here======================= */}
                <div className="file-req-main-wrapper">
                    <Typography variant="h5">Request a Certificate</Typography>
                    <form>
                    <FormGroup>
                        <FormControl style={{marginTop:20}}>
                          <InputLabel 
                            id="demo-simple-select-helper-label"
                            color="secondary"
                          >Type Of Certificate</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            color="secondary"
                            onChange={e=>handleSelect(e)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={'barangay_certification_of_residency'}     >
                              Barangay Certification of Residency
                            </MenuItem>
                            <MenuItem value={'barangay_clearance'}>
                              Barangay Clearance
                            </MenuItem>
                            <MenuItem value={"certification_of_indegency"}>
                              Certification of Indigency
                            </MenuItem>
                            <MenuItem value={"certification_of_good_moral"}>
                              Certification of Good Moral
                            </MenuItem>
                            <MenuItem value={"certificate_of_cutting_trees"}>
                              Certificate of Approval for Cutting Trees
                            </MenuItem>
                            <MenuItem value={"letter_of_acceptance"}>
                              Letter of Acceptance
                            </MenuItem>
                            <MenuItem value={"others"}>Others</MenuItem>
                          </Select>
                        </FormControl>
                        {
                          approval ? 
                          <FormControl style={{marginTop:10}}>
                          <TextField
                            multiline={true}
                            color="secondary"
                            label="Kumpletong inpormasyon, ex. ngalan sa kahoy, pila kabook"
                            rowsMax={15}
                          />
                          <TextField
                            color="secondary"
                            label="Lokasyon"
                          />
                          <TextField
                            color="secondary"
                            label="Purpose"
                          />
                        </FormControl>
                        :null
                        }
                        {
                      others ? 
                      <>
                      <FormControl style={{marginTop:10}}>
                        <TextField
                          multiline={true}
                          color="secondary"
                          label="Please Specify your purpose..."
                          rowsMax={15}
                        />
                      </FormControl>
                      </>
                      : null
                      }
                      {
                      acceptance ? 
                        <>
                        <FormControl style={{marginTop:10}}>
                          <TextField
                            color="secondary"
                            label="Lokasyon kung asa ka gikan"
                          />
                        </FormControl>
                        </>
                        : null
                      }
                          <RequirementCard requirement={"Purok Clearance"} />
                          <RequirementCard requirement={"Valid OR"} />
                      </FormGroup>
                    </form>
                </div>
                 {/* =======================end of content here===================== */}
              </div>
            </div>
        </div>
      </>
    )
}

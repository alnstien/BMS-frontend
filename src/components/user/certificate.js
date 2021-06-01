import React, { useState } from 'react';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import './certificate.css';
import { FormGroup, Typography,MenuItem,FormControl,InputLabel,Select,TextField,Button } from '@material-ui/core';
import RequirementCard from '../card/requirementsCard';


export default function Certificate(props) {
  const screenWidth = window.innerWidth;
  const [others,setOthers] = useState(false);
  const [issuedName,setIssueName] = useState(false);
  const [approval,setApproval] = useState(false)
  const [acceptance,setAcceptance] = useState(false)
  const [land,setLand] = useState(false)
  const [requirements,setRequirements] =useState([])

  const handleSelect=(e)=>{
    if(e.target.value==="others"){
      setOthers(true)
      setApproval(false);
      setAcceptance(false)
      setLand(false);
      setRequirements([]);
    }else if(e.target.value==="certificate_of_cutting_trees"){
      setRequirements([
        {required:'Purok Clearance',fileId:'purok_clearance'},
        {required:'OR Receipt',fileId:'or_receipt'}
      ])
      setApproval(true);
      setOthers(false)
      setLand(false)
      setAcceptance(false)
    }else if(e.target.value==="barangay_certification_of_residency" ){
      setRequirements([{required:'OR Receipt',fileId:'or_receipt'}])
      setApproval(false);
      setOthers(false)
      setLand(false)
      setAcceptance(false)
    }else if(e.target.value==="certification_of_indegency" ){
      setRequirements([{required:'OR Receipt',fileId:'or_receipt'}])
      setApproval(false);
      setOthers(false)
      setLand(false)
      setAcceptance(false)
    }else if(e.target.value==="barangay_clearance"){
      setRequirements([
      {required:'Purok Clearance',fileId:'purok_clearance'},
      {required:'OR Receipt',fileId:'or_receipt'}
    ])
      setApproval(false);
      setOthers(false)
      setLand(false)
      setAcceptance(false)
    }else if(e.target.value==="certification_of_good_moral"){
      setRequirements([
        {required:'Purok Clearance',fileId:'purok_clearance'},
        {required:'OR Receipt',fileId:'or_receipt'}
      ])
      setApproval(false);
      setOthers(false)
      setLand(false)
      setAcceptance(false)
    }else if(e.target.value==="letter_of_acceptance"){
      setRequirements([
        {required:'Latest RT PCR or Antigen Test Negative Result',fileId:'purok_clearance'},
        {required:'OR Receipt',fileId:'or_receipt'}
      ])
      setAcceptance(true)
      setApproval(false);
      setOthers(false)
      setLand(false)
    }else{
      setOthers(false)
      setApproval(false);
      setAcceptance(false)
      setLand(false)
      setRequirements([]);
    }
}
    return (
        <>
         <Navbar isLogged={true} />
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
                    <Typography variant="h4">Request a Certificate</Typography>
                    <form >
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
                            required
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
                        <FormControl style={{marginTop:20}}>
                          <InputLabel 
                            id="demo-simple-select-helper-label"
                            color="secondary"
                          >Name of the Requester</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            color="secondary"
                            required
                            onChange={e=>handleSelect(e)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Jane Doe"}>
                              Jane Doe
                            </MenuItem>
                            <MenuItem value={"Jonas Doe"}>
                              Jonas Doe
                            </MenuItem>
                            <MenuItem value={"Justin Doe"}>
                              Justin Doe
                            </MenuItem>
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
                            required
                          />
                        </FormControl>
                        </>
                        : null
                      }
                        {
                          requirements.length <=0 ? 
                          null
                          :
                          <FormControl style={{marginTop:10}}>
                            <em><Typography color="secondary" variant="h5">Requirement/s</Typography></em>
                          </FormControl>
                        }
                          {
                            requirements.map((req,index)=>{
                              return <RequirementCard requirements={req} key={index} />
                            })
                          }
                          <FormControl style={{marginTop:10}}>
                            <div className="req-submit-footer">
                              <Button variant="contained" color="secondary" type="submit">
                                Send Request
                              </Button>
                            </div>
                          </FormControl>
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

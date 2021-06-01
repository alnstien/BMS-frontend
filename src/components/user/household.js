import React, { useState } from 'react';
import './household.css'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import { Typography } from '@material-ui/core';
import {IoMdAdd} from 'react-icons/io'
import CollapseDiv from '../collapse/collapseDiv';
import AddMemberModal from '../modal/addMember';

export default function Household() {
    const [certificateModal,setCertificateModal] = useState(false);
    const [addMember,setAddMember] = useState(false)
    const screenWidth = window.innerWidth;

    const houseHold = [
      {id: 1,role:'Father', gender:'Male', name:"Justin Doe", age:42, bdate: "September 21, 1984",phone:"09484873789"},
      {id: 2,role:'Mother', gender:'Female', name:"Jane Doe", age:39, bdate :"September 21, 1981",phone:"09484873789"},
      {id: 3,role:'Child', gender:'Male', name:"John Doe", age:23, bdate: "September 21, 1997",phone:"09484873789"},
      {id: 4,role:'Child', gender:'Female', name:"Judy Doe", age:21, bdate: "September 21, 1999",phone:"09484873789"},
      {id: 5,role:'Child', gender:'Male', name:"Jonas Doe", age:19, bdate: "September 21, 2001",phone:"09484873789"},
      {id: 6,role:'Child', gender:'Male', name:"Jonas Doe", age:19, bdate: "September 21, 2001",phone:"09484873789"},
      {id: 7,role:'Child', gender:'Male', name:"Jonas Doe", age:19, bdate: "September 21, 2001",phone:"09484873789"},
    ]
    const openModal=(e)=>{
      e.preventDefault();
      return setAddMember(true)

    }
    return (
        <>
         <Navbar isLogged={true} />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    householdActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
              {
                screenWidth <= 700 ? 
                <PhoneNav 
                    householdActive ={true}
                    setShow={setCertificateModal}
                />
              :null
              }
              <div className="user-root">
                {/* ========================content goes here======================= */}
                    <div className="household-wrapper">
                        <div className="household-id">
                          <Typography variant="h6">Household Id: HSE-5687846868-12</Typography>
                        </div>
                        <div className="household-wrapper-content">
                          <div className="household-header-content">
                            <Typography
                              variant="body1"
                              // color="textSecondary"
                            >Details of your Household Members</Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                            >(Detalye sa imong membro sa panimalay)</Typography>
                          </div>
                          <div className="household-body-content">
                              <form>
                                <div className="household-body-content-heading">
                                  <button onClick={e=>openModal(e)} className="btn-add-member">
                                    <span><IoMdAdd size={24} color={"#9F0710"} /></span>
                                    Add a Household Member
                                  </button>
                                </div>
                                {
                                  houseHold.map((member,index)=>{
                                    return <CollapseDiv member={member} key={index} />
                                  })
                                }
                              </form>
                          </div>
                        </div>
                    </div>
                 {/* =======================end of content here===================== */}
              </div>
              {
                screenWidth <= 700 ? 
                <FloatingActions
                  setShow={setCertificateModal}
                />
                :null
              }
            </div>
        </div>
        <AddMemberModal 
          show={addMember}
          setShow={setAddMember}
        />
      </>
    )
}

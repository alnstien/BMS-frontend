import React,{useState} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import RequestCertificateModal from '../modal/requestCertificate'
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import {FormControl,TextField,MenuItem,Select,Typography,InputLabel, FormGroup} from '@material-ui/core'
import DefaultImg from '../../assets/avatar.jpg'
import {BiMessageSquareEdit,BiTransfer} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import {FaBirthdayCake} from 'react-icons/fa'
import {GoHome,GoPerson} from 'react-icons/go'
import {MdModeEdit,MdPersonPinCircle,MdEmail,MdLocalPhone} from 'react-icons/md'

export function Details({icon,details}){

  return(
    <>
    <div className="me-row mt-5">
      <span>{icon}</span>
        <Typography
          variant="subtitle1"
          color="textSecondary"
        >
          {details}
        </Typography>
      </div>
    </>
  )
}

export function UserInfo({icon,content,label,variant,options}){
  const [edit,setEdit] = useState(false)
  const [text,setText] = useState(content);

  const handleClose=(e)=>{
    e.preventDefault();
    return setEdit(false);
  }
  const handleOpen=(e)=>{
    e.preventDefault();
    return setEdit(true);
  }

  const handleChange=(e)=>{
    e.preventDefault();
    setText(e.target.value)
  }

  return(
    <>
     <div className="me-information-wrapper">
     {
       edit ? 
       <div className="edit-form-field">
        <form >
          <FormGroup className="form-flex-mod">
            {
              variant ==='date' ? 
            <FormControl>
             <TextField
                variant="outlined"
                color="secondary"
                value={content}
                label={label}
                type="date"
                value="2013-01-08"
              />
            </FormControl>
              :
              variant ==='select' ? 
              <FormControl>
              <InputLabel       
                id="demo-simple-select-helper-label"
                color="secondary"
              >Gender</InputLabel>
              <Select
                 color="secondary"
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={text}
                onChange={e=>handleChange(e)}
              >
                <MenuItem value="">
                  <em>{label}</em>
                </MenuItem>
                {
                  options.map(item=>{
                    return <MenuItem value={item}>{item}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
              :
              <FormControl>
              <TextField
                variant="outlined"
                color="secondary"
                label={label}
                value={text}
                onChange={(e)=>handleChange(e)}
              />
            </FormControl>
            }
            <div className="edit-form-footer">
              <button 
                className="edit-form-cancel-btn"
                onClick={handleClose}
              >Cancel</button>
              <button className="edit-form-submit-btn">Save</button>
            </div>
            </FormGroup>
        </form>
      </div>  
       :
       <div className="edit-content-wrapper">
          <span className="icon-wrapper">
            {
              icon
            }
          </span>
          <div className="edit-content">
          <Typography
            variant="subtitle1"
            color="textPrimary"
          >
          {
            content
          }
        </Typography>
          <Typography 
            variant="caption"
            color="textSecondary"
          >
                {
                  label
                }
            </Typography>        
              </div>
              <button 
                className="edit-button"
                onClick={handleOpen}
                ><MdModeEdit size={24} color={"#000"} /></button>
          </div>
        }                  
      </div>
    </>
  )
}

export default function Profile(props) {

        const [certificateModal,setCertificateModal] = useState(false);
        const screenWidth = window.innerWidth;
        const [edit,setEdit]=useState(false);
        const gender = ['Male','Female'];

        const handleEdit=()=>{
          setEdit(prevEdit=>!prevEdit);
        }
        
        //icons
        const postIcon = <BiMessageSquareEdit size={24} color={'#fa72a0'} />
        const transactIcon = <BiTransfer size={24} color={'#fa72a0'} />
        const unityIcon = <BsPeople size={24} color={'#fa72a0'} />
        const addressIcon = <GoHome size={24} color={'#fa72a0'} />
        const bdayIcon = <FaBirthdayCake size={24} color={'#fa72a0'} />
        const genderIcon = <GoPerson size={24} color={'#fa72a0'} />
        const emailIcon = <MdEmail size={24} color={'#fa72a0'} />
        const phoneIcon = <MdLocalPhone size={24} color={'#fa72a0'} />
    return (
        <>
        <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    profileActive ={true}
                    setShow={setCertificateModal}
                />
            </div>
            <div className="user-wrapper">
            {
                screenWidth <= 700 ? 
                <PhoneNav 
                    profileActive ={true}
                    setShow={setCertificateModal}
              />
              :null
            }
                <div className="user-root">
                    <div className="me-main">
                       <div className="me-wrapper">
                          <div className="me-profile-wrapper">
                            <img src={DefaultImg} alt="" />
                            <div className="me-profile-intro">
                              <div className="me-row">
                                <Typography
                                  variant="h6"
                                  color="textPrimary"
                                >
                                  Jane Doe
                                </Typography>
                                <Typography 
                                  variant="body2"
                                  color="textSecondary"
                                >
                                  @janedoe12
                                </Typography>
                              </div>
                              <div className='me-row'>
                                <p><MdPersonPinCircle size={24} color={'green'} /></p>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                >
                                  Zamboanga, Philippines
                                </Typography>
                              </div>
                              
                              {/* details begins here*/}
                              <Details 
                                icon={postIcon}
                                details={'24 posts created so far'}
                              />
                              <Details 
                                icon={transactIcon}
                                details={'12 requests submitted'}
                              />
                              <Details 
                                icon={unityIcon}
                                details={'2 complaints settled'}
                              />
                              <button className="me-edit-profile"><MdModeEdit size={24} color={'#fff'} /></button>
                            </div>
                          </div>
                          <UserInfo 
                            edit={edit}
                            setEdit={setEdit}
                            icon={emailIcon}
                            content={"janedoe124@email.test"}
                            label={"Email Address"}
                          />
                           <UserInfo 
                            icon={phoneIcon}
                            content={"+639478547347"}
                            label={"Contact number"}
                          />
                           <UserInfo 
                            icon={addressIcon}
                            content={"Malinao, Kabacsanan Iligan City"}
                            label={"Home Address"}
                          />
                          <UserInfo 
                            variant="date"
                            icon={bdayIcon}
                            content={"May 15, 1994"}
                            label={"Birthdate"}
                          />
                          <UserInfo 
                            icon={genderIcon}
                            variant="select"
                            options={gender}
                            content={"Female"}
                            label={"Gender"}
                          />
                       </div>
                    </div>
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
        <RequestCertificateModal 
          show={certificateModal}
          setShow={setCertificateModal}
        />
    </>
    )
}
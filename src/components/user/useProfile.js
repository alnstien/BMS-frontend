import React,{useState} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import RequestCertificateModal from '../modal/requestCertificate'
import ComplainModal from '../modal/complainModal';
import CreatePostModal from '../modal/createPost';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import {MdLocationOn,MdPhotoCamera} from 'react-icons/md'
import {FormControl,TextField , Typography,InputLabel,Input,FormHelperText, AccordionDetails, FormGroup} from '@material-ui/core'
import DefaultImg from '../../assets/default.jpg'
import {BiMessageSquareEdit,BiTransfer} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'

function Details({icon,details}){

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
        <Typography 
          variant="p"
          color="textSecondary"
        >
                                   
        </Typography>
      </div>
    </>
  )
}

export default function Profile(props) {

        const [certificateModal,setCertificateModal] = useState(false);
        const [complainModal,setComplainModal] = useState(false);
        const [createPostModal,setCreatePostModal] = useState(false);
        const screenWidth = window.innerWidth;
    
        const postIcon = <BiMessageSquareEdit size={24} color={'blue'} />
        const transactIcon = <BiTransfer size={24} color={'blue'} />
        const unityIcon = <BsPeople size={24} color={'blue'} />
    return (
        <>
        <Navbar />
        <div className="root-mod">
            <div className="col-mod">
                <Sidebar
                    profileActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
                />
            </div>
            <div className="user-wrapper">
            {
                screenWidth <= 700 ? 
                <PhoneNav 
                    profileActive ={true}
                    setShow={setCertificateModal}
                    setShowComplain={setComplainModal}
                    setShowCreatePostModal={setCreatePostModal}
              />
              :null
            }
                <div className="user-root">
                    <div style={{padding:10}}>
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
                                  variant="p"
                                  color="textSecondary"
                                >
                                  @janedoe12
                                </Typography>
                              </div>
                              <div className='me-row'>
                                <p><MdLocationOn size={24} color={'gray'} /></p>
                                <Typography
                                  variant="p"
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
                              <button className="me-edit-profile">Edit Profile</button>
                            </div>
                          </div>
                          <div className="me-information-wrapper">
                            <div className="edit-form-field">
                              <form >
                                <FormGroup className="form-flex-mod">
                                <FormControl>
                                  <TextField
                                    variant="outlined"
                                    label="Address"
                                  />
                                </FormControl>
                                <div className="edit-form-footer">
                                  <button className="edit-form-cancel-btn">Cancel</button>
                                  <button className="edit-form-submit-btn">Save</button>
                                </div>
                                </FormGroup>
                              </form>
                            </div>
                              <div className="edit-content-wrapper">
                                  <span className="icon-wrapper">
                                    p
                                  </span>
                                  <div className="edit-content">
                                  <Typography
                                    variant="subtitle1"
                                    color="textPrimary"
                                  >
                                    Malinao, Kabacsanan Iligan City
                                </Typography>
                                <Typography 
                                  variant="p"
                                  color="textSecondary"
                                >
                                   Address
                                </Typography>        
                                  </div>
                                  <button className="edit-button">edit</button>
                              </div>
                          </div>
                       </div>
                    </div>
                </div>
                {
                screenWidth <= 700 ? 
                <FloatingActions
                  setShow={setCertificateModal}
                  setShowComplain={setComplainModal}
                  setShowCreatePostModal={setCreatePostModal}
                />
                :null
              }
            </div>
        </div>
        <RequestCertificateModal 
          show={certificateModal}
          setShow={setCertificateModal}
        />
        <ComplainModal 
          show={complainModal}
          setShow={setComplainModal}
        />
        <CreatePostModal 
          show={createPostModal}
          setShow={setCreatePostModal}
        />
    </>
    )
}
{/* <form className="form-flex">
                              
<div className="me-row">
  <input type="file" id="pp" />
  <label htmlFor="pp">
    <span><MdPhotoCamera size={24} /></span>
    Change Photo
  </label>
</div>
<div className="me-form-group">

</div>
</form> */}
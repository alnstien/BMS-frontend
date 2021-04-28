import React,{useState} from 'react'
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import RequestCertificateModal from '../modal/requestCertificate'
import ComplainModal from '../modal/complainModal';
import CreatePostModal from '../modal/createPost';
import PhoneNav from '../navbar/phoneNavbar';
import FloatingActions from '../navbar/floatingActions';
import {MdLocationOn,MdPhotoCamera} from 'react-icons/md'
import {FormControl,TextField , Typography} from '@material-ui/core'
import DefaultImg from '../../assets/default.jpg'


export default function Profile(props) {

        const [certificateModal,setCertificateModal] = useState(false);
        const [complainModal,setComplainModal] = useState(false);
        const [createPostModal,setCreatePostModal] = useState(false);
        const screenWidth = window.innerWidth;

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
                    <div className="post-wrapper">
                       <div className="me-wrapper">
                          <div className="me-profile-photo-wrapper">
                            <img src={DefaultImg} alt="" />
                          </div>
                          <form className="me-information-wrapper">
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
                              <div className="me-row">
                                <input type="file" id="pp" />
                                <label htmlFor="pp">
                                  <span><MdPhotoCamera size={24} /></span>
                                  Change Photo
                                </label>
                              </div>
                              <FormControl>
                                <TextField
                                  
                                />
                              </FormControl>
                          </form>
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

import React from 'react';
import './user.css';
import Navbar from '../navbar/emptyNavbar';
import Sidebar from '../sidebar/userSidebar';
import Card from '../card/post';
import {AiOutlinePlus} from 'react-icons/ai'

 
 
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
                  <div className="user-create-post">
                    <button className="create-post-btn">
                      <span><AiOutlinePlus size={23} color={'#fff'} /></span>
                      Create post
                    </button>
                  </div>
                    <Card
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    />
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

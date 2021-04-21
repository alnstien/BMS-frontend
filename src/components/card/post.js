import React from 'react'
import './post.css'
import {IoMdMore,IoMdHeart} from 'react-icons/io'
import {BiCommentDetail} from 'react-icons/bi'
import Img from '../../assets/default.jpg'


export default function Post({text}) {
    return (
        <div className="post-wrapper">
            <div className="post-profile-details">
                <div className="post-avatar-wrapper">

                </div>
                <div>
                    <h5>John Die</h5>
                    <small>September 5 at 4:30 P.M.</small>
                </div>
                <button className="option-btn"><IoMdMore size={24} /></button>
            </div>
            <div className="post-content-wrapper">
                <p>{text}</p>
                <img className="post-content-img" src={Img} alt=""/>
            </div>
            <div className="post-card-footer">
                <div className="post-card-info">
                    <button><IoMdHeart size={25} color={'gray'} /></button>
                    <small>11k</small>
                </div>
                <div className="post-card-info">
                    <button><BiCommentDetail size={22} /></button>
                    <small>11k</small>
                </div>
            </div>
            <div className="comment-wrapper">
                <div className="comment">
                    <div className="comment-header">
                        <h5>John Doe</h5>
                        <small>Yesterday at 5:50 PM </small>
                    </div>
                    <div className="comment-body">
                        <p>This is a sample comment.</p>
                    </div>
                </div>
                <div className="comment">
                    <div className="comment-header">
                        <h4>John Doe</h4>
                        <small>Yesterday at 5:50 PM </small>
                    </div>
                    <div className="comment-body">
                        <p>This is a sample comment.</p>
                    </div>
                </div>
            </div>
            <form className="post-reply-form">
                    <input 
                        className="post-reply-input"
                        placeholder="Reply..."
                    />
            </form>
        </div>
    )
}

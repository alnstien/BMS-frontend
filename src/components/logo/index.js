import React from 'react'
import './logo.css';
import IMG from '../../assets/logo.png'

export default function Logo(props) {
    return (
        <div className="logo-wrapper">
            <div className="logo">
                <img src={IMG} alt="" />
            </div>
        </div>
    )
}

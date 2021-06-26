import React from 'react'
import './homepage.css';
import Navbar from '../navbar/emptyNavbar';
import Footer from './footer';
import Navigation from './navigation';

export default function Homepage(props) {
    return (
    <>
    <div className="whole">
        <div className="homapage-header">
        
        </div>
        <Navigation />
        <div className="homepage-body-wrapper">
            <div className="homepage-body">
            
            </div>
        </div>
        <Footer />
    </div>
    </>
    )
}

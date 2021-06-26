import React from 'react'
import './homepage.css';
import {Typography} from '@material-ui/core'
import Footer from './footer';
import Navigation from './navigation';

export default function Homepage(props) {
    return (
    <>
    <div className="whole">
        <div className="homapage-header">
            <div className="homepage-header-content">
                <div className="homepage-logo"></div>
                <div className="homepage-banner">
                    <Typography variant="h2">Barangay Esperanza</Typography>
                    <Typography variant="h4">Municipality of Ramon Magsaysay</Typography>
                </div>
            </div>
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

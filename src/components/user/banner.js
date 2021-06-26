import React from 'react'
import {Typography} from '@material-ui/core';


export default function Banner(props) {
    return (
        <div className="homapage-header">
        <div className="homepage-header-content">
            <div className="homepage-logo"></div>
            <div className="homepage-banner">
                <Typography variant="h2">Barangay Esperanza</Typography>
                <Typography variant="h4">Municipality of Ramon Magsaysay</Typography>
            </div>
        </div>
        </div>
    )
}

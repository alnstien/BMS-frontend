import React from 'react'
import './card.css'
import {Typography} from '@material-ui/core'
import {BsPeopleFill} from 'react-icons/bs'


export default function Card(props) {
    return (
        <div className="d-card-wrapper">
            <Typography 
                variant="subtitle1" 
                color="textSecondary" 
                component="p"
            >
                Engagements
        </Typography>
        <div className="d-card-wrapper-body">
            <span>
               <BsPeopleFill size={24} color={'blue'} />
            </span>
            <Typography 
                variant="caption" 
                color="textSecondary" 
                component="p"
            >
                Visitors
            </Typography>
            <Typography 
                variant="h4" 
                color="textPrimary" 
                component="p"   
            >
                34,566
            </Typography>
        </div>
        </div>
    )
}

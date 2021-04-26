import React from 'react'
import './card.css'
import {Typography} from '@material-ui/core'



export default function Card({title,icon,subtitle,count}) {
    return (
        <div className="d-card-wrapper">
            <Typography 
                variant="subtitle1" 
                color="textSecondary" 
                component="p"
            >
                {title}
        </Typography>
        <div className="d-card-wrapper-body">
            <span>
               {
                   icon
               }
            </span>
            <Typography 
                variant="caption" 
                color="textSecondary" 
                component="p"
            >
                {
                    subtitle
                }
            </Typography>
            <Typography 
                variant="h4" 
                color="textPrimary" 
                component="p"   
            >
               {
                   count
               }
            </Typography>
        </div>
        </div>
    )
}

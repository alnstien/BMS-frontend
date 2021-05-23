import { Typography } from '@material-ui/core'
import React from 'react'

export default function RequirementCard({requirement}) {
    return (
        <div className="req-card">
            <Typography>
                {requirement}
            </Typography>
        </div>
    )
}

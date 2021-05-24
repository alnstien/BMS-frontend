import { Typography } from '@material-ui/core'
import React from 'react'

export default function RequirementCard({requirements}) {
    return (
        <div className="req-card">
            <Typography>
                {requirements.required}
               <div>
                    <input type="file" name={requirements.fileId} id={requirements.fileId} required />
               </div>
            </Typography>
        </div>
    )
}

import { FormGroup } from '@material-ui/core'
import React from 'react'
import './option.css'

function Button(){

    return(
        <button className="option-nav-btn">
            0
        </button>
    )
}

export default function Option() {
    return (
        <div className="option-nav">
            <form>
                <Button />
                <Button />
                <Button />
                <div>
                    <input />
                </div>
            </form>
        </div>
    )
}

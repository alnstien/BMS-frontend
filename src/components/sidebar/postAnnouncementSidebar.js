import React from 'react'
import {Link} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import {AiOutlineRight} from 'react-icons/ai'
import {Button,FormControl,FormGroup} from '@material-ui/core'

export default function PostSidebar({show,setShow,orActive}) {

    const handleToggleModal=(e)=>{
        e.preventDefault();
        setShow(true);
    }

    return (
        <form>
            <FormGroup>
                {
                    !orActive ? null :
                    <FormControl style={{marginTop:10}}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={e=>handleToggleModal(e)}
                    >
                       Add Official Receipt
                    </Button>
                    </FormControl>
                }
                {
                    orActive ? null :
                    <FormControl style={{marginTop:10}}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={e=>handleToggleModal(e)}
                    >
                       Post Announcement
                    </Button>
                    </FormControl>
                }
            </FormGroup>
    </form>
    )
}

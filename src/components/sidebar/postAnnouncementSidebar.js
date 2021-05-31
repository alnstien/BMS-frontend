import React from 'react'
import {Link} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import {AiOutlineRight} from 'react-icons/ai'
import {Button,FormControl,FormGroup} from '@material-ui/core'

export default function PostSidebar({show,setShow}) {

    const handleToggleModal=(e)=>{
        e.preventDefault();
        setShow(true);
    }

    return (
        <form>
            <FormGroup>
                <FormControl style={{marginTop:10}}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={e=>handleToggleModal(e)}
                    >
                       Post Announcement
                    </Button>
                </FormControl>
            </FormGroup>
        {/* <Link 
            className={ active ? 
                'form-a-active': 'form-a-default'}
            to="/settings">
                General Settings
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={ purokActive ? 
                'form-a-active': 'form-a-default'}
            to="/settings">
                Account Settings
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link>
        <Link 
            className={ residentActive ? 
                'form-a-active': 'form-a-default'}
            to="/settings">
               Miscellaneous Settings
            <span className="icon-wrapper-mod">
                <AiOutlineRight size={20} />
            </span>
        </Link> */}
    </form>
    )
}

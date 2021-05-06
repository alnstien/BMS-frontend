import React, { useState } from 'react'
import Modal from 'react-modal'
import './modal.css';
import SimpleBar from 'simplebar-react';
import { TextareaAutosize } from '@material-ui/core';
import {BiImageAdd} from 'react-icons/bi'
import { Button } from '@material-ui/core';
import {flexContent,flexoverlay,fulloverlay,content,width} from '../../config/setup'


function PhotoHolder({preview,handleRemovePhoto,index}){
  return(
    <div className="posts-photo-holder">
        <button 
          onClick={()=>handleRemovePhoto(preview,index)}
          className="posts-photo-close">&times;</button>
        <img src={preview} alt=""/>
    </div>
  )
}


export default function CreatePostModal({show,setShow}) {
  const [photos,setPhotos] = useState([])
  const [previews, setPreviews] = useState([]);
  const [files, setFiles] = useState([]);

  const handleClose=()=>{
    return setShow(false)
  }

  const handleImage=(e)=>{
    const fileList = Array.from(e.target.files);
    setFiles(fileList);
    const mappedFiles = fileList.map((file) => ({
      ...file,
      preview: URL.createObjectURL(file),
    }));
    setPreviews(mappedFiles)
}

  const handleRemovePhoto=(img,n)=>{
    const newPreviews = previews.filter(preview=>preview.preview !== img);
    const newFiles = files.filter((file,index)=>index !== n);
    setPreviews(newPreviews);
    setFiles(newFiles);
  }

  return (
      <Modal isOpen={show}
      style={{
          overlay: width <= 700 ? fulloverlay : flexoverlay,
          content: width <= 700 ? content : flexContent
        }}
     >
      <div className="modal-wrapper">
          <div className="create-post">
              <div className="modal-header">
                  <h2 className="modal-title">Post</h2>
                  <button 
                    onClick={handleClose}
                    className="modal-close"
                  >&times;</button>
              </div>
              <div className="modal-body">
                <div className="modal-adons">
                    <input 
                      type="file" 
                      multiple={true}
                      id="post-img" 
                      onChange={e=>handleImage(e)}
                    />
                    <label className="post-img-wrapper"
                      htmlFor="post-img">
                        <BiImageAdd size={25} color={'#fff'} />
                    </label>
                    {
                      previews.length <=0 ? null :
                      <SimpleBar className="modal-photos-wrapper">
                      {
                        previews.map((item,index)=>{
                          return <PhotoHolder
                            key={index}
                            index={index}
                            preview={item.preview}
                            handleRemovePhoto={handleRemovePhoto}
                          />
                        })
                      }
                    </SimpleBar>
                    }
                </div>
                  <form style={{marginTop:10}}>
                    <TextareaAutosize 
                      rowsMin={8}
                      rowsMax={8}
                      placeholder="Write something..."
                    />
                  <div className="modal-footer">
                  <Button variant="contained" color="primary">Post</Button>
                  </div>
                  </form>
                  
              </div>
          </div>
      </div>
     </Modal>
    )
}

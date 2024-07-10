import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function UpdateDialogProduct(props) {
  const navigate = useNavigate()
  const {title, setTitle, description, setDescription, handleUpdate, error, setError} = props
    
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateForm = (e) => {
    e.preventDefault();
    if (title.length<2 || description.length<2){
      setError('Fields are required')
    }
    else{
    handleClose();
    handleUpdate();
  }
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="warning" onClick={handleClickOpen}>
      &#9998;
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
          <DialogTitle id="alert-dialog-title">
            {"Update product"}
          </DialogTitle>
          <form onSubmit={handleUpdateForm}>
          <DialogContent>
            <div id="alert-dialog-description">
            
              <div className="mb-3">
                <label htmlFor="title">Title</label>
                <input className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name='title'/>
              </div>
              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <input className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)} type="text" name='description'/>
              </div>
             <p className='text-center text-danger'>{error}</p>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' color="success"  autoFocus>
              Update 
            </Button>
          </DialogActions>
          </form>
      </Dialog>
    </React.Fragment>
  );
}
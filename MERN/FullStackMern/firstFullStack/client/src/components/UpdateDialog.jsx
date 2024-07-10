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
export default function UpdateDialog(props) {
  const navigate = useNavigate()
    const { age, setAge, handleUpdate, error, setError} = props

    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateForm = (e) => {
    e.preventDefault();
    if (age.length<1 || age<1){
      setError('Age is required')
    }
    else{
    handleClose();
    handleUpdate();
  }
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="success" onClick={handleClickOpen}>
        Update User
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
          <DialogTitle id="alert-dialog-title">
            {"Update user"}
          </DialogTitle>
          <form onSubmit={handleUpdateForm}>
          <DialogContent>
            <div id="alert-dialog-description">
            
              <div className="mb-3">
                <label htmlFor="age">Age</label>
                <input className='form-control' type="number" min={1} max={150} value={age} onChange={(e)=>setAge(e.target.value)}/>
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
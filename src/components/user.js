import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const user = (props) => {
   return(
    <li>
        <span>Name:    {props.children}</span> <br />
        <div class="bh"> 
            <TextField  id="filled-basic" color="secondary" label="Enter name" variant="outlined" onChange={props.changeEvent} value={props.children}/>
            <Button variant="contained" color="primary" onClick={props.delEvent}>X</Button>
        </div>
        
    </li>

    )}
export default user;
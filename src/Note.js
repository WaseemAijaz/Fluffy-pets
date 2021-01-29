import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';



const Note = (props) => {
    const delevent = ()=>{
        props.delete(props.id);
    }
    return(
        <>
    <div className="note">
    <h4>{props.title} </h4> <br/>
     <p>{props.content} </p> 
     <tr><Button onClick={delevent}> <DeleteIcon/> </Button> </tr>
</div>
        
        </>
    );
}

export default Note;
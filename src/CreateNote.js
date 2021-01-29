import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const CreateNote = (props) => {
const [expend , setexpend] = useState(false);

    const [note, setNote] = useState({
        title:'',
        content:''
    });

    const txt = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        setNote((predata)=>{
            return {
                ...predata,
                [name]:value
            }
        });
    }
    const notesub = () =>{
        props.passnote(note);
       setNote({
        title:'',
        content:''
    }); 

    }
    const expendit =() =>{
        setexpend(true);
    }
    const normal =() =>{
        setexpend(false);
    }

    return(
        <>
        <div className="notepad">
        <form>
        <table>
        {expend ?
        <tr><input type="text" name="title" value={note.title} onChange={txt} placeholder="Title" /> </tr> : null }
        <tr><textarea onClick={expendit} onDoubleClick={normal} name="content" value={note.content} onChange={txt} placeholder="Write a Note..." rows='' column='' > </textarea> </tr>
         { expend ? <Button onClick={notesub}> <AddIcon/></Button> : null}
        </table>
        </form>
        </div>

        </>
    );
}

export default CreateNote;
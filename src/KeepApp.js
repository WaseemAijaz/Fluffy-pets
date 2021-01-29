import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


const KeepApp = () => {
const [item , setitem] = useState([]);

const notesub=(note)=>{
setitem((predata)=>{
    return [...predata, note];
});
}
const ondel = (id) =>{
    setitem((olditem)=>
    olditem.filter((curdata,indx)=>{
        return indx !==id;
    }))
}

    return(
        <>
        <Header/>
        <CreateNote passnote={notesub} />
        <Note/>
        {item.map((val,index)=>{
            return(
                <Note key={index} id={index} title={val.title}
                content={val.content} delete={ondel} />
            );
        })}
        <Footer/>
        </>
    );
}

export default KeepApp;
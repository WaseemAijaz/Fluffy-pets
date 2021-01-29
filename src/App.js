import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Clock from 'react-digital-clock';
//import LanguageList from 'react-translator-component';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const purple = "#6800DF";
  const [bdOrig, bdUpdte] = useState(purple);
  const [Text , newText] = useState( "Do You Love Me! "+ " 😏 ");

  const [ourtext,setOurText] = useState({
    fname : "" ,
    lname : "" ,
    email : "",
    no : "",
    address : "",
  });
  

   const bgColor = () =>{
  let newBg = "#E10083";
  bdUpdte(newBg);
  newText("Ahoo  ❤️");
}

const ScndClick = () =>{
  bdUpdte(purple);
  newText("I am Not 😠 ");
}

const formevent = (event) => {
console.log(event.target.value) 

// const value = event.target.value;
// const name = event.target.name;
// const email = event.target.email;

const {value, name} = event.target;

setOurText((prevalue) =>{

  return{
    ...prevalue,
    [name] : value,
  }


// if(name === "fname"){
//   return {
//     fname : value,
//     lname : prevalue.lname,
//     email : prevalue.email,
//   }
// }else if(name === "lname"){
//   return{
//     fname : prevalue.fname,
//     lname : value,
//     email : prevalue.email,
//   }
// }else if(name === "email"){
//   return{
//     fname : prevalue.fname,
//     lname : prevalue.lname,
//     email : value, 
//   }
// }
});
}

const onSub = () =>{
  alert("form submitted");
}

  return (
    <>
    
    <Clock />
    <div style={{backgroundColor: bdOrig }}>
   
    <button className="align-items-center ml-5 mt-3 align-items-center" onClick={bgColor} onDoubleClick={ScndClick}> {Text} </button>

    <h1 className="text-capitalize text-danger" >Hello {ourtext.fname} {ourtext.lname}  </h1>
    <h3> {ourtext.email} </h3>
    <h4> {ourtext.no} </h4>
    <h5> {ourtext.address} </h5>

    <PersonIcon style={{textAlign:'center', marginLeft:'29.6%'}} />
     <input type="text" placeholder="Enter Your First Name" name="fname"  onChange={formevent}
    value={ourtext.fname} required /> <br />
    <PersonIcon style={{textAlign:'center', marginLeft:'29.6%'}} />
    <input  type="text" placeholder="Enter Your Last Name" name="lname" onChange={formevent}
    value={ourtext.lname} required /> <br />
    <MailOutlineIcon style={{textAlign:'center', marginLeft:'29.6%'}} />
    <input type="email" placeholder="Enter Your email" name="email" onChange={formevent}
    value={ourtext.email} required />   <br />

    <input type="text" placeholder="Enter Your number" name="no" onChange={formevent}
    value={ourtext.no} required /><br />

    <input area="text" placeholder="Enter Your address" name="address" onChange={formevent}
    value={ourtext.address} required />

    <button className="formBtn"  onClick={onSub}>Submit 👍</button>
    </div>

    </>
  );
}



export default App;

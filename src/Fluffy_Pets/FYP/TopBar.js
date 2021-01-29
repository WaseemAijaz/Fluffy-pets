import React,{useState} from 'react';
import CallIcon from '@material-ui/icons/Call';
import Clock from 'react-digital-clock';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TimerIcon from '@material-ui/icons/Timer';
import DateRangeIcon from '@material-ui/icons/DateRange';

const TopBar = () => {
    const curdate = new Date().toLocaleDateString();
    const [locat , setlocat] = useState(null);

    const getUserGeolocationDetails = () =>{
         fetch('https://geolocation-db.com/json/c0593a60-4159-11eb-80cd-db15f946225f')
         .then(Response => Response.json())
         .then(data => setlocat(data));
    }


    
    
        return (
            <>
            <div className="topbar">
            <table className="topbartable">
            <tr>
            <td>English</td>
            <td> <LocationOnIcon style={{marginLeft:'10px'}} onClick={getUserGeolocationDetails}>location</LocationOnIcon></td>
           <td> {locat && <p>{" "}{`${locat.city}, ${locat.country_name}(${locat.country_code})`}
             </p> } </td>
            
            <td> <DateRangeIcon style={{fontSize:'12'}}/>  {curdate}</td>
            <td> <TimerIcon style={{fontSize:'12'}}/> <Clock style={{fontSize:'11'}}/></td>
            <td style={{fontSize:"22"}}> <CallIcon style={{fontSize:'14', marginTop:"4px", marginLeft:"5px"}} /> +923048981846</td>
            <td><FacebookIcon/> <InstagramIcon/> <TwitterIcon/> </td>
            </tr>
            </table>
            </div>
            </>
        );
    
}

export default TopBar;
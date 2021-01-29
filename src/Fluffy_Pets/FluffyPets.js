import React from 'react';
import TopBar from "./FYP/TopBar";
import Header from './Header';
import HomePage from './Pages/Homepages/Homepage';
import {Route , Switch} from 'react-router-dom';



const Cats = () =>{
    return(
        <h1>order now cats </h1>
    );

}

const FluffyPets = () =>{
     return(
         <>
         <TopBar/>
         <Header/>
         <Switch>
         <Route  exact  path="/" component={HomePage} />
         <Route    path="/Cats" component={Cats}  />
         </Switch>

         


         </>
     );
}

export default FluffyPets;
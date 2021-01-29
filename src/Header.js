import React from 'react';
//import logo from './Images/logo.PNG';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
    return(
        <>
        <div className="header">
        <table>
        <tr>
        <td>
        <img src="../public/Images/logo.PNG" alt="logo" width="110" height="70" className=" ml-2 mt-2 mb-2" />
        </td>
        <td>
        <h2 className="text-white ml-4">Wasi Keep</h2>
        </td>
        </tr>
        </table>
        </div>
        </>
    );
}

export default Header;
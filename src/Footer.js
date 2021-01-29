import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
    return(
        <>
        <footer className="align-items-end text-center">
        <p>Copyright ℗ {year} </p>
        </footer>

        </>
    );
}

export default Footer;
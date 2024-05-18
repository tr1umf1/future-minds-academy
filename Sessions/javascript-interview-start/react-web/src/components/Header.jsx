/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Header() {
    return (
        <header className="row">
            <div className="col white">FMA Movies</div>
            <div className="col text-right">
                <a className="white" href="#">Login</a>
            </div>
        </header>
    );
}

export default Header;
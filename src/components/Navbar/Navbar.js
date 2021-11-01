import React from 'react'

import FormSearch from '../common/FormSearch/FormSearch';
import './Navbar.scss';
import '../../media.scss';
export default function Navbar() {


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="nav-left">
                        <h1 className="nav-title">Blog</h1>
                    </div>
                    <div className="nav-right">
                        <FormSearch className="form-search"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

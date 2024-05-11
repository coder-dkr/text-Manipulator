import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function NavBar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={`nav-link ${props.active.home === true? "active": null}`} to="/home">Home<span className="sr-only">(current)</span></Link>
                        <Link className={`nav-link ${props.active.about === true? "active": null}`} to="/about">{props.About}</Link>
                    </div>
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={props.togglemode}>{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</button>
            </nav>
          

        </>

    )
}

NavBar.prototypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
}

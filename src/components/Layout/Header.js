import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <header className="bg-secondary text-secondary-text">
            <div className="container flex items-center justify-between h-16">
                <div className="font-bold text-lg">
                    <Link to="/"> Movie DB</Link>
                </div>
                <div className="cursor-pointer">
                    <FontAwesomeIcon icon={faUserCircle} size='2x' />
                </div>
            </div>
        </header>
    )
}

export default Header

import React from 'react'

function Footer() {
    const year = (new Date()).getFullYear();
    return (
        <footer className="text-center py-3 bg-secondary">
            <div>Movie DB</div>
            <div>&copy; {year}, Movie, Inc or affiliates</div>
        </footer>
    )
}

export default Footer

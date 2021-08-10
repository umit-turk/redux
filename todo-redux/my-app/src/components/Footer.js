import React from 'react'

function Footer() {
    return (
        <footer className="info">
            <p>click to edit a to do</p>
            <p>
                created by <a href="#">Ümit</a>
            </p>
            <p>
                Part of <a href="#">Yaşar</a>
            </p>
        </footer>
    )
}

export default React.memo(Footer)

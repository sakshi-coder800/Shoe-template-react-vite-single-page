import React from 'react'

const Navigator = () => {
    return (
        <>
            {/* // NAvigator  */}
            <nav className="container">
                <div className="logo">
                    <img src="./public/images/brand_logo.png" alt="Page Logo" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button>login</button>
            </nav>

        </>
    )
}

export default Navigator

import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="/">Sto-R-eact</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
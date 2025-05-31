import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark custom-navbar py-3 animate-navbar">
                <img src="favicon.png" alt="" height={'60px'} className="navbar-logo" />
                <NavLink className="navbar-brand nav-title" to="/">NewsMonkey</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    "nav-link nav-link-animated" + (isActive ? " nav-link-active" : "")
                                }
                                to="/"
                                end
                            >
                                Home <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>

                        {['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'].map((elem) => {
                            return <li key={elem} className="nav-item ">
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link nav-link-animated" + (isActive ? " nav-link-active" : "")
                                    }
                                    to={`/${elem}`}
                                >
                                    {elem}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
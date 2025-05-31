import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../App'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-dark custom-navbar py-3 animate-navbar ${theme === 'dark' ? 'navbar-dark-theme' : ''}`}>
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
                    {/* Theme toggle button */}
                    <button
                        className="btn theme-toggle-btn ms-auto"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        style={{ marginLeft: 'auto', background: 'none', border: 'none', outline: 'none', cursor: 'pointer' }}
                    >
                        {theme === 'light' ? (
                            // Moon icon for dark mode
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffb347" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path></svg>
                        ) : (
                            // Sun icon for light mode
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffb347" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                        )}
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
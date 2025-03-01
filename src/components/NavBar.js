import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-">
                <img src="favicon.png" alt="" height={'80px'} />
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>

                        {['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'].map((elem) => {
                            return <li key={elem} className="nav-item ">
                                <Link className="nav-link " to={`/${elem}`}>{elem}</Link>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
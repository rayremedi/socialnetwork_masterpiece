import React from 'react'
import {Link} from 'react-router-dom';

 const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> DevBook
        </Link>
      </h1>
      <ul>
        <li><a href="#">Développeurs</a></li>
        <li><Link to="/register">Inscription</Link></li>
        <li><Link to="/login">Connexion</Link></li>
      </ul>
    </nav>
    )
}

export default Navbar
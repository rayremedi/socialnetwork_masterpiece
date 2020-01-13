import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">DevBook</h1>
            <p className="lead">
              Crée ton profil, échange et trouve  l'aide d'autres développeurs
               
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">S'inscrire</a>
              <a href="login.html" className="btn btn-light">Se connecter</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Landing

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Informations = () => {
    const navigate = useNavigate();

            return (
                <div className='Accueil'>
                {/* <button onClick={() => navigate('/')} >Accueil</button> */}

                
                <title>Home</title>
                <header className='Accueil-header'>
                    <h1 className="home">Titre</h1>
                    {/* <Link to="accueil" >Informations</Link>
                    <Link to="coran" >Lire le Coran</Link> */}
                </header>
                <div className='mainNavbar'>
              <h2 className='mainNavbarTitle'>Navigation</h2>
                
             <div>
              
              <Link to="/">Home</Link>
              </div>
              <div>
              <a href="/islam">
                Islam
              </a>
              </div>
              <div>
              <a href="/audiolecture">
                Écouter/Lire
              </a>
              </div>
              <div>
              <a href="/cinqpilier">
                Les piliers de l'islam
              </a>
              </div>
              <a href="/informations">  
                Informations complémentaires
              </a>
              </div>
              <div>
         
              </div>
                    </div>

            )
}

export default Informations;
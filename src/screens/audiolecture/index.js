import React from 'react';
import { Link } from 'react-router-dom';

const AudioLecture = () => {

    return (
        <div className='Accueil'>
            <title>Home</title>
        <header className='audiolecture-header'>
            <h1 className="title">Audio et Lecture</h1>
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
    );
};

export default AudioLecture;
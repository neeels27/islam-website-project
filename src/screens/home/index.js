import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='Accueil'>
            <title>Home</title>
        <header className='Accueil-header'>
            <h1 className="title">Titre</h1>
            {/* <Link to="accueil" >Informations</Link>
            <Link to="coran" >Lire le Coran</Link> */}
        </header>
        <div className='mainNavbar'>
      <center><h2 className='mainNavbarTitle'>Navigation</h2></center>
        
     <div>
      
      <Link className="navButton" to="/" >Home</Link>
      </div>
      <div>
      <Link className="navButton" to="/islam" >Islam</Link>
      </div>
      <div>
      <Link className="navButton" to="/audiolecture" >Écouter/Lire</Link>
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
      <h3 className="titreSeparation">Définition :</h3>
      <div className="areatext1">
<p className="premierParagraphe">
D'origine arabique, "Islam" signifie "soumission à la volonté de Dieu". Étymologiquement, il est 
apparenté au mot salam qui signifie paix.
Religion monothéiste, l'Islam est la religion 
révélée au prophète Mohamed  (c. 570-632) par 
l'ange Gabriel. Mohamed est le "Dernier messager", 
de la lignée des prophètes bibliques, ceux de l'Ancien 
Testament, Adam, Abraham, Moïse, et Jésus dont les musulmans rejettent 
le caractère divin.</p>
<p>

<h3 className="titreSeparation" >Les cinq piliers de l'islam sont :</h3>

La profession de foi (Chahada) : 
croire en Allah, Dieu unique et seul créateur et en son prophète Mouhammed  envoyé à l'humanité toute entière.
La prière (A-Salat) : 
cinq fois par jour et à heure déterminé en direction de la mecque.
Le jeûne du mois de ramadan (Saoum):
du lever au coucher du soleil.
L'aumône (Az-Zakat) : 
au profit des pauvres, en fonction de ses moyens.
Le pèlerinage (Hajj) à la Mecque,
au moins une fois dans sa vie si le croyant en a les moyens physiques et matériels.

Le croyant doit se référer au Coran, adhérer sincèrement à l'Islam,
avoir une confiance absolue en Dieu, s'abandonner intégralement 
à lui et rechercher la perfection de son comportement. La loi canonique de l'islam est contenu dans la charia.

L'islam ne se considère pas comme une religion 
nouvelle. En effet, elle rétablit la révélation que Dieu avait jadis faite aux prophètes. Il n'y a pas de prêtres, mais des oulémas jurisconsultes, et des imams qui dirigent la prière.

Certains des principes fondamentaux sur lesquels 
l'Etat islamique doit se référer, sont définis dans le Coran et la Sunna (paroles et actes du prophète).

Les efforts exceptionnels que les arabes ont 
accompli pour transmettre le message du prophète, 
ont permis à l'islam de se répandre dans le monde 
entier. Aujourd'hui, un cinquième des musulmans est de langue arabe ;
 la majorité réside en Indonésie, Pakistan, Inde, Bangladesh, 
 Turquie, Egypte et Nigeria.</p>
</div>
</div>
    );
};

export default Home;
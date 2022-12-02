import React from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import islam from '../../data/islam';
import Sourate1 from '../../audio/sourate/Sourate1.mp3'

const Islam = () => {

    return (

        
        <div className='Accueil'>
            <title>Home</title>
        <header className='Accueil-header'>
            <h1 className="title">Salam salam</h1>
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
 
      </div>
      <h3 className="titreSeparation">Définition :</h3>
      <div className="areatext1">
        <p className="premierParagraphe">
        Sourate Al-Fatiha</p>

<p><table id="table1">
  <tr>
    <th>title1</th>
    <th>title2</th>
    <th>title3</th>
  </tr>
  <tr>
    <td id="nested">
      <table id="table2">
        <tr>
          <td>cell1</td>
          <td>cell2</td>
          <td>cell3</td>
        </tr>
      </table>
    </td>
    <td>cell2</td>
    <td>cell3</td>
  </tr>
  <tr>
    <td>cell4</td>
    <td>cell5</td>
    <td>cell6</td>
  </tr>
</table></p>

<ReactAudioPlayer className="playerSourate1"
src={Sourate1}
autoplay
controls/>

<h3 className="titreSeparation" >{islam.chahadaTitle}</h3>
<p>
    {islam.chahadaContent}
</p>
</div>
</div>

    );
    
};

export default Islam;
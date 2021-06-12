import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
   return (
      <div className="contact">
         <Navigation />
         <div className="contactContent">
            <div className="header"></div>
            <div className="contactBox">
               <h1>Contactez-moi</h1>
               <ul>
                  <li>
                     <i className="fas fa-map-marker-alt"></i>
                     <span>Angers</span>
                  </li>
                  <li>
                     <i className="fas fa-mobile-alt"></i>
                     <CopyToClipboard text="0606060606">
                        <span className="clickInput" onClick={() => alert('Téléphone copié !')}>
                           0606060606
                        </span>
                     </CopyToClipboard>
                  </li>
                  <li>
                     <i className="far fa-envelope"></i>
                     <CopyToClipboard text="lisita_vincent@yahoo.fr">
                        <span className="clickInput" onClick={() => alert('Courriel copié !')}>
                           lisita_vincent@yahoo.fr
                        </span>
                     </CopyToClipboard>
                  </li>
               </ul>
            </div>

            <div className="socialNetwork">
               <ul>
                  <li>
                     <a href="http://www.google.fr" target="_blank" rel="noopener noreferrer">
                        <h4>Linkedin</h4>
                        <i className="fab fa-linkedin"></i>
                     </a>
                  </li>
                  <li>
                     <a href="http://www.google.fr" target="_blank" rel="noopener noreferrer">
                        <h4>Github</h4>
                        <i className="fab fa-github"></i>
                     </a>
                  </li>
                  <li>
                     <a href="http://www.google.fr" target="_blank" rel="noopener noreferrer">
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter"></i>
                     </a>
                  </li>
                  <li>
                     <a href="http://www.google.fr" target="_blank" rel="noopener noreferrer">
                        <h4>Codepen</h4>
                        <i className="fab fa-codepen"></i>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Contact;

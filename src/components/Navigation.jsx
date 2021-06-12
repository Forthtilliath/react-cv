import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className="sidebar">
         <div className="id">
            <div className="idContent">
               <img src="./media/billGates.jpg" alt="profil-pic" />
               <h3>Vincent LISITA</h3>
            </div>
         </div>

         <div className="navigation">
            <ul>
               <li>
                  <NavLink exact to="/" activeClassName="navActive">
                     <i className="fas fa-home"></i>
                     <span>Accueil</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink exact to="/competences" activeClassName="navActive">
                     <i className="fas fa-mountain"></i>
                     <span>Compétences</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink exact to="/portfolio" activeClassName="navActive">
                     <i className="fas fa-images"></i>
                     <span>Portfolio</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink exact to="/contact" activeClassName="navActive">
                     <i className="fas fa-book"></i>
                     <span>Contact</span>
                  </NavLink>
               </li>
            </ul>
         </div>

         <div className="socialNetwork">
            <ul>
               <li>
                  <a
                     href="http://www.google.fr"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Linkedin"
                     title="Linkedin"
                  >
                     <i className="fab fa-linkedin"></i>
                  </a>
               </li>
               <li>
                  <a
                     href="http://www.google.fr"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Github"
                     title="Github"
                  >
                     <i className="fab fa-github"></i>
                  </a>
               </li>
               <li>
                  <a
                     href="http://www.google.fr"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Twitter"
                     title="Twitter"
                  >
                     <i className="fab fa-twitter"></i>
                  </a>
               </li>
               <li>
                  <a
                     href="http://www.google.fr"
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Codepen"
                     title="Codepen"
                  >
                     <i className="fab fa-codepen"></i>
                  </a>
               </li>
            </ul>
            <div className="signature">
               <p>Forth &copy; 2021</p>
            </div>
         </div>
      </div>
   );
};

export default Navigation;

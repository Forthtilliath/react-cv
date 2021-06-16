import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
   state = {
      languages: [
         { value: 'Javascript', xp: 1.8 },
         { value: 'CSS', xp: 2.0 },
         { value: 'PHP', xp: 0.7 },
         { value: 'Python', xp: 1.9 },
         { value: 'Java', xp: 0.5 },
      ],
      frameworks: [
         { value: 'React', xp: 0.8 },
         { value: 'Bootstrap', xp: 2.0 },
         { value: 'Sass', xp: 1.7 },
         { value: 'Gulp', xp: 1.4 },
      ],
   };

   /**
    * Récupère la valeur d'une variable css à l'aide de son nom
    * @param {String} varName 
    * @returns {Number}
    */
   getNumberFromCssVar = (varName) => {
      let docStyle = getComputedStyle(document.documentElement);
      let value = docStyle.getPropertyValue(varName);
      let number = value.replace(/[^\d]/g, '');
      return parseInt(number, 10);
   };

   /**
    * Redimensionne la barre des années en fonction du nombre d'éléments
    * @param {String} varName Nom de la variable du :root
    * @param {Number} nb Nombre d'éléments afin d'adapter la hauteur de la barre des années
    */
   changeSize = (varNameDiv, varNameBar, nb) => {
      let h_header = this.getNumberFromCssVar('--heightLanguagesHeader');
      let h_elem = this.getNumberFromCssVar('--heightLanguagesDiv');
      const heightBar = `${nb * h_elem + 10}px`;
      document.querySelector(':root').style.setProperty(varNameBar, heightBar);
      const heightDiv = `${nb * h_elem + 20 + h_header}px`;
      document.querySelector(':root').style.setProperty(varNameDiv, heightDiv);
   };

   render() {
      let { languages, frameworks } = this.state;
      // Adapte la hauteur de la barre ainsi que de la div en fonction du nombre d'éléments
      this.changeSize('--heightLanguages', '--heightLanguagesBarYears', languages.length);
      this.changeSize('--heightFrameworks', '--heightFrameworksBarYears', frameworks.length);

      return (
         <div className="languagesFrameworks">
            <ProgressBar languages={languages} className="languagesDisplay" title="langages" />
            <ProgressBar languages={frameworks} className="frameworksDisplay" title="frameworks & bibliothèques" />
         </div>
      );
   }
}

export default Languages;

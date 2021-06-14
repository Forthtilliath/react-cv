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
    * Redimensionne la barre des années en fonction du nombre d'éléments
    * @param {String} varName Nom de la variable du :root
    * @param {Number} nb Nombre d'éléments afin d'adapter la hauteur de la barre des années
    */
   changeSizeBar = (varName, nb) => {
      const height = `${nb * 38}px`;
         document.querySelector(':root').style.setProperty(varName, height);
   };

   render() {
      let { languages, frameworks } = this.state;
      this.changeSizeBar('--heightLanguagesBarYears', languages.length);
      this.changeSizeBar('--heightFrameworksBarYears', frameworks.length);

      return (
         <div className="languagesFrameworks">
            <ProgressBar languages={languages} className="languagesDisplay" title="langages" />
            <ProgressBar languages={frameworks} className="frameworksDisplay" title="frameworks & bibliothèques" />
         </div>
      );
   }
}

export default Languages;

import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
   state = {
      languages: [
         { value: 'Javascript', xp: 1.8 },
         { value: 'CSS', xp: 2.0 },
         { value: 'PHP', xp: 0.7 },
         { value: 'Python', xp: 0.4 },
      ],
      frameworks: [
         { value: 'React', xp: 0.8 },
         { value: 'Bootstrap', xp: 2.0 },
         { value: 'Sass', xp: 1.7 },
         { value: 'Gulp', xp: 1.4 },
      ],
   };

   render() {
      let { languages, frameworks } = this.state;

      return (
         <div className="languagesFrameworks">
            <ProgressBar languages={languages} className="languagesDisplay" title="langages" />
            <ProgressBar languages={frameworks} className="frameworksDisplay" title="frameworks & bibliothèques" />
         </div>
      );
   }
}

export default Languages;

import React, { Component } from 'react';

class OtherSkills extends Component {
   state = {
      otherSkills: ['SQL', 'Github', 'Gulp', 'Photoshop', 'Anglais', 'Autodidacte', 'Curieux', 'SVG'],
   };
   render() {
      return (
         <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
               <ul>
                  {this.state.otherSkills.map((item, key) => {
                     return (
                        <li key={key}>
                           <i className="fas fa-check-square"></i> {item}
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      );
   }
}

export default OtherSkills;

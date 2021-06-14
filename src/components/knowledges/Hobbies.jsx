import React, { Component } from 'react';

class Hobbies extends Component {
   state = {
      hoobies: [
         { class: 'fas fa-dice-d20', name: 'Jeux de rôle' },
         { class: 'fas fa-chess', name: 'Jeux de société' },
         { class: 'fas fa-film', name: 'Films & Séries' },
         { class: 'fas fa-music', name: 'Musique' },
      ],
   };
   render() {
      return (
         <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
               {this.state.hoobies.map((item, key) => {
                  return (
                     <li key={key} className="hobby">
                        <i className={item.class}></i> <span>{item.name}</span>
                     </li>
                  );
               })}
            </ul>
         </div>
      );
   }
}

export default Hobbies;

import React, { Component } from 'react';
import { experiencesData } from '../../data/experiencesData';

class Experience extends Component {
   render() {
      return (
         <div className="experience">
            <h3>Expériences</h3>
            <div className="exp">
               {experiencesData.map((item, key) => {
                  return (
                     <div key={key}>
                        <h4>{item.name}</h4>
                        <h5>{item.date}</h5>
                        <p>{item.description}</p>
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}

export default Experience;

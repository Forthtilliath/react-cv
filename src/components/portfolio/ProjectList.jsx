import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Projet';

class ProjectList extends Component {
   state = {
      projects: portfolioData,
      radios: ['javascript','css','react','php'],
      selectedRadio: 'javascript',
   };

   handleRadio = (event) => {
      let radio = event.target.value;
      this.setState({
         selectedRadio: radio,
      });
   };

   render() {
      let { projects, radios, selectedRadio } = this.state;
      return (
         <div className="portfolioContent">
            <ul className="radioDisplay">
               {radios.map((radio,key) => {
                  return (
                     <li key={key}>
                        <input
                           type="radio"
                           name="radio"
                           checked={radio === selectedRadio}
                           value={radio}
                           id={radio}
                           onChange={this.handleRadio}
                        />
                        <label htmlFor={radio}>{radio}</label>
                     </li>
                  );
               })}
            </ul>
            <div className="projects">
               {projects
                  .filter((item) => item.languages.includes(selectedRadio))
                  .map((item,key) => (
                     <Project key={key} item={item} />
                  ))}
            </div>
         </div>
      );
   }
}

export default ProjectList;

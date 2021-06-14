import React, { Component } from 'react';

class Projet extends Component {
   state = {
      showInfo: false,
   };

   handleInfo = () => {
      this.setState({ showInfo: !this.state.showInfo });
   };

   render() {
      let { name, languages, languagesIcons, source, info, picture } = this.props.item;


      return (
         <div className="project">
            <div className="icons">
               {languagesIcons.map((icon, key) => (
                  <i className={icon} key={icon} title={languages[key]}></i>
               ))}
            </div>
            <h3>{name}</h3>
            <img src={picture} alt="img-projet" onClick={this.handleInfo} />
            <span className="infos" onClick={this.handleInfo}>
               <i className="fas fa-plus-circle"></i>
            </span>

            {(() => {
               // Block overflow if showinfo is showned (usefull on mobile)
               document.querySelector('body').classList.toggle('noScrollY', this.state.showInfo);
            })()}
            {this.state.showInfo && (
               <div className="showInfos">
                  <div className="infosContent">
                     <div className="head">
                        <h2>{name}</h2>
                        <div className="sourceCode">
                           <a href={source} rel="noopener noreferrer" className="button sources_text" target="_blank">
                              Code sources
                           </a>
                           <a href={source} rel="noopener noreferrer" className="button sources_icon" target="_blank">
                              <i class="fas fa-folder-open"></i>
                           </a>
                        </div>
                     </div>

                     <p className="text">{info}</p>

                     <div className="button return" onClick={this.handleInfo}>
                        Retourner sur la page
                     </div>
                  </div>
               </div>
            )}
         </div>
      );
   }
}

export default Projet;

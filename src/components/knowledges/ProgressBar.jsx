import React from 'react';

const ProgressBar = (props) => {
   return (
      <div className={props.className}>
           <h3>{props.title}</h3>
           <div className="years">
               <span>Années d'expérience</span>
               <span>1 an</span>
               <span>2 ans</span>
           </div>

           <div>
               {
                   props.languages.map((item,key) => {
                       let xpYears = 2;
                       let ProgressBar = item.xp / xpYears * 100 + '%';

                       return (
                           <div className="languagesList" key={key}>
                               <div>{item.value}</div>
                               <div className="progressBar" style={{width:ProgressBar}}></div>
                           </div>
                       )
                   })
               }
           </div>
      </div>
   );
};

export default ProgressBar;

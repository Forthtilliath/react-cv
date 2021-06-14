import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

if ('serviceWorker' in navigator) {
   console.log("sw ?");
   navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(() => console.log('sw registered'))
      .catch((err) => console.log(err));
}

const App = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/competences" component={Knowledges} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
         </Switch>
      </BrowserRouter>
   );
};

export default App;

//https://www.npmjs.com/package/react-page-name

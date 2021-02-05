import React from 'react';
import Champions from '../LeagueGenAlg/components/champions.js'
import Header from '../LeagueGenAlg/components/header.js'

import '../LeagueGenAlg/App.css'


function App() {

  return (
    <div className="GenAlgApp">
      <Header/>
      <Champions/>
    </div>

  );
}

export default App;

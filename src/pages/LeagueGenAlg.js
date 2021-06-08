import React from 'react';
import Champions from '../LeagueGenAlg/components/champions.js'
import Header from '../LeagueGenAlg/components/header.js'

import '../LeagueGenAlg/LeagueGenAlg.css'
// import 'antd/dist/antd.css';


{/* <Button as={Link} to={'/LeagueGenAlg'}>
  Live Demo!
</Button> */}


function GenAlg() {

  return (
    <div className="GenAlgApp">
      <Header/>
      <Champions/>


    </div>

  );
}

export default GenAlg;

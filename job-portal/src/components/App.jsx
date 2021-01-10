/* This component is used for Routing different components */

import React  from 'react'
import { Route, Switch } from 'react-router-dom'
import candidates from './CandidatesHome'
import candidateInfo from './CandidateInfo'

export default function App() {
  return(  
    <Switch>
      <Route exact path="/" component={candidates} />
      <Route path="/home" component={candidates} />
      <Route path="/candidate" component={candidateInfo} />
     </Switch>
  ) 
}

import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App =()=> {

  
 const [progress, setProgress] = useState()
  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress}  key="general" pagesize={6} country="us" category="general" /></Route>
            <Route exact path="/business"><News setProgress={setProgress}  key="business" pagesize={6} country="us" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pagesize={6} country="us" category="entertainment" /></Route>
            {/* <Route exact path="/general"><News setProgress={setProgress}  key="general" pagesize={6} country="us" category="general" /></Route> */}
            <Route exact path="/health"><News setProgress={setProgress}  key="health" pagesize={6} country="us" category="health" /></Route>
            <Route exact path="/science"><News setProgress={setProgress}  key="science" pagesize={6} country="us" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={setProgress} key="sports" pagesize={6} country="us" category="sport" /></Route>
            <Route exact path="/technology"><News setProgress={setProgress}  key="technology" pagesize={6} country="us" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  
}

export default App;
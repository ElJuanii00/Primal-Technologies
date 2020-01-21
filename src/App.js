import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/landing/Main';
import Legacy_code from "./components/Services/legacy_code"
import Custom_software from "./components/Services/custom_software"
import Outsourcing from "./components/Services/outsourcing"
import Mobile from "./components/Services/mobile"
import Projects from './components/Projects';
import WebMail from './components/basic/WebMail';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/legacy" component={Legacy_code} />
      <Route path="/software" component={Custom_software} />
      <Route path="/outsourcing" component={Outsourcing} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/projects" component={Projects} />
      <Route path="/webmail" component={WebMail} />
    </Router>
  );
}

export default App;
import React from 'react';

import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar'
import {Route, Switch} from "react-router-dom"
// here, we use react-router-dom bc by using this we can route to different views in single page application.

function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms/" component={Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRoom} />
    {/* here we use slug bc in room we have different category and this will help us to choose whichever we want to
     */}
     <Route component={Error} />
     </Switch>
     {/* we are using switch in these bc if we have go to url whcih we will not pass to one whcih is not present this will show error message on the website */}

      </>
  );
}

export default App;

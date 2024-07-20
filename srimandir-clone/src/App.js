import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Puja from './components/Puja'
import Booking from './components/Booking'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/puja" component={Puja} />
          <Route path="/booking" component={Booking} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
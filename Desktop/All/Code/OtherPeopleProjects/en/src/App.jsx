
import React, { useState } from 'react'
import './styles/global.css'
import styles from './styles/App.module.css'
import HomePage from './Pages/HomePage'
import Admin from './Pages/Admin'


import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/admin' component={Admin} exact />

        </Switch>
      </main>
    </div>

  )
}

export default App

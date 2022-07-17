import React, { useState, useEffect } from 'react';

import './App.css';
import "animate.css/animate.min.css";
import { Authentication, Landing, DebutPages, Profile } from './Pages/inedx';
import { GiveGratitude, Forum, People, Ventures, VenturePage } from './Pages/Community/index';
import { Routes, Route } from "react-router-dom";
import { appRoutes } from './Routes/routes';
import DebutEvents from './Pages/DebutEvents/DebutEvents';
import MyDebutEvents from './Pages/Debut/MyDebutEvents/MyDebutEvents';
import NavBarComponent from './Components/NavBar/NavBar';
import DebutEventPage from './Pages/DebutEvents/DebutEventPage';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from '@apollo/client';
import { AUTHENTICATED_USER } from './GraphQl';

function App() {

  const { isAuthenticated } = useAuth0();


  return (
    <div className="App">
      {!isAuthenticated ?
        <Routes>
          <Route path={appRoutes.landing} element={<Landing />} />
          <Route path={appRoutes.authentication} element={<Authentication />} />
        </Routes>
        :
        <>
          <NavBarComponent />
          <Routes>
            <Route path={appRoutes.profile} element={<Profile />} />
            <Route path={appRoutes.forum} caseSensitive element={<Forum />} />
            <Route path={appRoutes.giveGratitude} caseSensitive element={<GiveGratitude />} />
            <Route path={appRoutes.people} caseSensitive element={<People />} />
            <Route path={appRoutes.ventures} caseSensitive element={<Ventures />} />
            <Route path={appRoutes.venturePage} element={<VenturePage />} />
            <Route path={appRoutes.debutEvents} element={<DebutEvents />} />
            <Route path={appRoutes.debutEventPage} element={<DebutEventPage />} />
            <Route path={appRoutes.myVentures} element={<DebutPages.BusinessPage />} />
            <Route path={appRoutes.newVenture} element={<DebutPages.NewBusinessVenture />} />
            {/* *************** */}
            <Route path={appRoutes.debutRegistry} element={<DebutPages.Registry />} />
            <Route path={appRoutes.myEvents} element={<MyDebutEvents />} />
          </Routes>
        </>
      }
    </div> 
  );
}

export default App;

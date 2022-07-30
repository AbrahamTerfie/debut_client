import React, { useState, useEffect } from 'react';

import './App.css';
import "animate.css/animate.min.css";
import { Authentication, Landing, DebutPages, Profile, MyDebutInfo } from './Pages/inedx';
import { MyEvents } from './Pages/MyDebut/index';
import { GiveGratitude, Forum, People, Ventures, VenturePage } from './Pages/Community/index';
import RegistryPage from './Pages/RegistryPage/RegistryPage';
import { Routes, Route } from "react-router-dom";
import { appRoutes } from './Routes/routes';
import DebutEvents from './Pages/DebutEvents/DebutEvents';
import MyDebutEvents from './Pages/Debut/MyDebutEvents/MyDebutEvents';
import NavBarComponent from './Components/NavBar/NavBar';
import DebutEventPage from './Pages/DebutEvents/DebutEventPage';
import { useAuth0 } from '@auth0/auth0-react';

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
            <Route path={appRoutes.myDebutInfo} element={<MyDebutInfo />} />
            {/* *************** */}
            <Route path={appRoutes.debutRegistry} element={<DebutPages.Registry />} />
            <Route path={appRoutes.myEvents} element={<MyEvents />} />
            <Route path={appRoutes.registry} element={<RegistryPage />} />
          </Routes>
        </>
      }
    </div>
  );
}

export default App;

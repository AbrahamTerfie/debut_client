import React from 'react';

import './App.css';
import "animate.css/animate.min.css";
import { Authentication, Landing, DebutPages, MyDebutPages, Profile, Home } from './Pages/inedx';

import { GiveGratitude, Forum, People, Ventures } from './Pages/Community/index';
import { Routes, Route, Link } from "react-router-dom";
import { appRoutes } from './Routes/routes';
import DebutEvents from './Pages/DebutEvents/DebutEvents';
import MyDebutEvents from './Pages/Debut/MyDebutEvents/MyDebutEvents';

function App() {
  return (
    <div className="App">

      {/* <Topbar toggleSidebar={toggleSidebar} /> */}

      <Routes>
        <Route path={appRoutes.landing} element={<Landing />} />
        <Route path={appRoutes.authentication} element={<Authentication />} />
        <Route path={appRoutes.profile} element={<Profile />} />

        <Route path={appRoutes.home} caseSensitive element={<Home />} >
          <Route path={appRoutes.giveGratitude} caseSensitive element={<GiveGratitude />} />
          <Route path={appRoutes.forum} caseSensitive element={<Forum />} />
          <Route path={appRoutes.people} caseSensitive element={<People />} />
          <Route path={appRoutes.ventures} caseSensitive element={<Ventures />} />

          <Route path={appRoutes.debutEvents} element={<DebutEvents />} />


          <Route path={appRoutes.myVentures} element={<DebutPages.BusinessPage />} />
          <Route path={appRoutes.debutRegistry} element={<DebutPages.Registry />} />
          <Route path={appRoutes.myEvents} element={<MyDebutEvents />} />

        </Route>



        {/* <Route path={appRoutes.debut} element={<NavBarElement />} >

        </Route> */}
        {/* 
        <Route path={appRoutes.myDebut} element={<NavBarElement />} >
          <Route path={appRoutes.myDebutHome} element={<MyDebutPages.MyDebutHome />} />
          <Route path={appRoutes.myDebutBusiness} element={<MyDebutPages.MyBusiness />} />
          <Route path={appRoutes.myDebutEvents} element={<MyDebutPages.MyDebutEvetnts />} />
        </Route> */}
      </Routes>

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import "animate.css/animate.min.css";
import { Authentication, Landing, Dashboard, DashBoardPages } from './Pages/inedx';
// import { MyEvents } from './Pages/MyDebut/index'
import { GiveGratitude, Forum, People, Ventures, CompanyDetailPage } from './Pages/Community/index';

import { Routes, Route } from "react-router-dom";
import { appRoutes } from './Routes/routes';


import NavBarComponent from './Components/NavBar/NavBar';

import { useAuth0 } from '@auth0/auth0-react';
import { Toaster } from 'react-hot-toast';
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
        <div>
          <NavBarComponent />
          <Routes>

            <Route path={appRoutes.forum} caseSensitive element={<Forum />} />
            <Route path={appRoutes.giveGratitude} caseSensitive element={<GiveGratitude />} />
            <Route path={appRoutes.people} caseSensitive element={<People />} />
            <Route path={appRoutes.ventures} caseSensitive element={<Ventures />} />

            {/* *************** */}

            <Route path={appRoutes.venturePage} element={<CompanyDetailPage />} />
            <Route path={appRoutes.dashboard} element={<Dashboard />} >
              <Route path={appRoutes.myProfile} element={<DashBoardPages.MyProfile />} />
              <Route path={appRoutes.myCompany} element={<DashBoardPages.MyCompany />} />
              <Route path={appRoutes.goals} element={<DashBoardPages.CompanyGoals />} />
              <Route path={appRoutes.events} element={<DashBoardPages.CompanyEvents />} />
              <Route path={appRoutes.eventDetails} element={<DashBoardPages.DebutEventPage />} />
              <Route path={appRoutes.gratitudes} element={<DashBoardPages.GratitudePage />} />
            </Route>
          </Routes>
          <Toaster />
        </div>
      }
    </div>
  );
}

export default App;

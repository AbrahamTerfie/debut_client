import React, { Suspense, useEffect } from 'react';
import './App.css';
import "animate.css/animate.min.css";
// import { Landing, Dashboard, DashBoardPages } from './Pages/inedx';
// import { GiveGratitude, Forum, People, Ventures, CompanyDetailPage, Events, EventPage } from './Pages/Community/index';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { appRoutes } from './Routes/routes';
import NavBarComponent from './Components/NavBar/NavBar';

import { useAuth0 } from '@auth0/auth0-react';
import { Toaster } from 'react-hot-toast';

import { useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Store/RootReducer';
import { AUTHENTICATED_USER } from './GraphQl';
import { setHasCompany, setPersonaldata } from './Store/identfiers/identfiers';
import { saveAuth0UserInfo } from './Store/Auth/AuthSlice';

const Landing = React.lazy(() => import('./Pages/inedx').then((module) => ({ default: module.Landing })));
const Dashboard = React.lazy(() => import('./Pages/inedx').then((module) => ({ default: module.Dashboard })));
const MyProfile = React.lazy(() => import('./Pages/DashBoard/DashBoardPages/index').then((module) => ({ default: module.MyProfile })));
const CompanyGoals = React.lazy(() => import('./Pages/DashBoard/DashBoardPages/index').then((module) => ({ default: module.CompanyGoals })));
const CompanyEvents = React.lazy(() => import('./Pages/DashBoard/DashBoardPages/index').then((module) => ({ default: module.CompanyEvents })));
const MyCompany = React.lazy(() => import('./Pages/DashBoard/DashBoardPages/index').then((module) => ({ default: module.MyCompany })));
const GratitudePage = React.lazy(() => import('./Pages/DashBoard/DashBoardPages/index').then((module) => ({ default: module.GratitudePage })));
const DebutEventPage = React.lazy(() => import('./Pages/DashBoard/DashBoardPages/index').then((module) => ({ default: module.DebutEventPage })));
const DashboardExperiance = React.lazy(() => import('./Pages/DashBoard/DashBoardPages/index').then((module) => ({ default: module.DashboardExperiance })));

const GiveGratitude = React.lazy(() => import('./Pages/Community/index').then((module) => ({ default: module.GiveGratitude })));
const Forum = React.lazy(() => import('./Pages/Community/index').then((module) => ({ default: module.Forum })));
const People = React.lazy(() => import('./Pages/Community/index').then((module) => ({ default: module.People })));
const Ventures = React.lazy(() => import('./Pages/Community/index').then((module) => ({ default: module.Ventures })));
const CompanyDetailPage = React.lazy(() => import('./Pages/Community/index').then((module) => ({ default: module.CompanyDetailPage })));
const Events = React.lazy(() => import('./Pages/Community/index').then((module) => ({ default: module.Events })));
const EventPage = React.lazy(() => import('./Pages/Community/index').then((module) => ({ default: module.EventPage })));
const Loader = React.lazy(() => import('./Components/Loader/Loader'));


function App() {
  const { isAuthenticated, user } = useAuth0();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { auth0UserInfo } = useSelector((store: RootState) => store.auth)
  const [authenticatedUser, authenticatedUsrRes] = useMutation(AUTHENTICATED_USER,
    {
      onCompleted: (data) => {
        const { authenticatedUser } = data;
        dispatch(setPersonaldata({
          userID: authenticatedUser._id,
          userEmail: authenticatedUser.email,
          hasCompany: authenticatedUser.hasCompany,

        }));
        dispatch(setHasCompany(authenticatedUser.hasCompany))
      }
    }
  )


  if (isAuthenticated && location.pathname === appRoutes.landing) {
    navigate(appRoutes.forum);
  } else if (!isAuthenticated && location.pathname !== appRoutes.landing) {
    navigate(appRoutes.landing);
  }


  useEffect(() => {
    if (isAuthenticated && user) {
      if (user) {
        dispatch(saveAuth0UserInfo(user))
        auth0UserInfo && authenticatedUser({
          variables: {
            userInput: {
              email: auth0UserInfo.email,
              userName: auth0UserInfo.name,
              firstName: auth0UserInfo.nickname,
              profileImage: auth0UserInfo.picture,
            }
          }
        })
      }
    }
  }, [isAuthenticated, user, auth0UserInfo.email, auth0UserInfo.name, auth0UserInfo.nickname, authenticatedUser ]);
  if (authenticatedUsrRes.loading) { return <Loader /> }

  return (
    <Suspense fallback={<Loader />}>
      <div className="App" >
        {isAuthenticated && <NavBarComponent />}
        {/* {isAuthenticated && user && StartUp()} */}

        <Routes>
          <Route path={appRoutes.landing} element={<Landing />} />

          <Route path={appRoutes.forum} caseSensitive element={<Forum />} />
          <Route path={appRoutes.giveGratitude} caseSensitive element={<GiveGratitude />} />
          <Route path={appRoutes.people} caseSensitive element={<People />} />
          <Route path={appRoutes.ventures} caseSensitive element={<Ventures />} />
          <Route path={appRoutes.debutEvent} caseSensitive element={<Events />} />
          <Route path={appRoutes.debutEventPage} caseSensitive element={<EventPage />} />

          {/* *************** */}

          <Route path={appRoutes.venturePage} element={<CompanyDetailPage />} />
          <Route path={appRoutes.dashboard} element={<Dashboard />} >
            <Route path={appRoutes.myProfile} element={<MyProfile />} />
            <Route path={appRoutes.myCompany} element={<MyCompany />} />
            <Route path={appRoutes.goals} element={<CompanyGoals />} />
            <Route path={appRoutes.events} element={<CompanyEvents />} />
            <Route path={appRoutes.eventDetails} element={<DebutEventPage />} />
            <Route path={appRoutes.gratitudes} element={<GratitudePage />} />
            <Route path={appRoutes.experience} element={<DashboardExperiance />} />
          </Route>
        </Routes>
        <Toaster />

      </div>
    </Suspense >
  );
}

export default App;

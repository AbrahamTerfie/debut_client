
import React from 'react';
import { Route, RouteProps, PathRouteProps } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loader from '../Components/Loader/Loader';



export default function ProtectedRoute() {
  return (
    <div>ProtectedRoute</div>
  )
}

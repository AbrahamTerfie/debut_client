import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Navigation.css'
import CrownLogo from '../../Assets/crown.svg'
export default function NavigationComponent() {
    return (
        <Fragment>
            <div className="navigation"  >
                <Link className="logo-container" to="/"  >

                    <img src={CrownLogo} alt="crown" className="logo" />


                </Link>
                <div className="nav-links-container" >
                    <Link className="nav-link" to='/shop'>shop</Link>
                    <Link className="nav-link" to='sign-in'>sign-in</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

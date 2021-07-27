import React from 'react';
import { NavLink } from 'react-router-dom';

function SplashPage() {
    return (
        <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/sign-up'>Sign Up</NavLink>
        </div>
    );
}

export default SplashPage;

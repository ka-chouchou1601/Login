import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
      const ctx = useContext(AuthContext);
      //Allows us to tap into a context and listen it no need to use auth consumer bcz we have 
      //Auth context is used for checking the authentication status 
  return (
        <nav className={classes.nav}>
          <ul>
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLoggedIn && (
              <li>
                <button onClick={ctx.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      );
};

export default Navigation;

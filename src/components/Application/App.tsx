import React, { useContext } from 'react'
import './App.scss';
import { RouteComponentProps, Router } from "@reach/router";
import SignIn from '../SignIn/SignIn';
import { UserContext } from "../../providers/UserProvider";
import { signOut } from '../../firebase';

let Profile = (props: RouteComponentProps) => {
  const user = useContext(UserContext);
  return (
    <div>{user && `Hello ${user.user?.displayName}`}<button onClick={signOut}>Log out</button></div>
  )
}

function App() {
  const user = useContext(UserContext);
  return (
    <div className="app">
      {user && user.user ?
        <Profile />
        :
        <Router>
          <SignIn path="/" />
        </Router>}
    </div>
  );
}

export default App;

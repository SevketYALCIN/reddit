import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { User } from "@firebase/auth-types";

export const UserContext = createContext<IUser | null>({ user: null });

const UserProvider: React.FunctionComponent = props => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setUser({ user: userAuth });
    });
  }, [user])

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}

interface IUser {
  user: User | null;
}

export default UserProvider;
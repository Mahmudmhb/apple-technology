import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const AuthInfo = {
    handleSignUp,
    handleSignIn,
    handleLogOut,
    user,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, isLoading] = useState(true);
  const auth = getAuth(app);
  const handleSignUp = (email, password) => {
    isLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSignIn = (email, password) => {
    isLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogOut = () => {
    isLoading(true);
    return signOut(auth);
  };
  const hundleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      isLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const AuthInfo = {
    handleSignUp,
    handleSignIn,
    handleLogOut,
    user,
    loading,
    hundleUpdateProfile,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

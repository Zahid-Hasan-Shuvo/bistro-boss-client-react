import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
// const axios = require('axios');

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken]=useState('')

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };




  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile =(name, photo)=>{
        return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        axios.post('http://localhost:3000/jwt', {email: currentUser.email})
        .then(data =>{
           
            localStorage.setItem('access-token', data.data.token
            )
            setToken(data.data.token);
            setLoading(false);
        })
    }
    else{
        localStorage.removeItem('access-token')
    }


    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
    token
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

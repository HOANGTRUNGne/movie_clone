import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth} from '../FireBase/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, signOut
} from "firebase/auth";


const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    const signUp = (mail, password) => {
        return createUserWithEmailAndPassword(auth, mail, password)
    }

    const logIn = (mail, password) => {
        return signInWithEmailAndPassword(auth, mail, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }

    })
    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}

// export default AuthContext;
import React from "react";
import TokenContext from "./TokenContext";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";

const TokenState = (props) => {

    const [tokenValue, setTokenValue] = useState("")

    const firebaseConfig = {
        apiKey: "AIzaSyDPWWVqKEJ6w3ZETTm9qB2BVY0stqOO4NA",
        authDomain: "oauth-app-3e936.firebaseapp.com",
        projectId: "oauth-app-3e936",
        storageBucket: "oauth-app-3e936.appspot.com",
        messagingSenderId: "855299737848",
        appId: "1:855299737848:web:c40491641c94fea476d30d",
        measurementId: "G-TLJR6WTSJP"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const signInAuth = (provider) => {
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {

                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                console.log(token)

                setTokenValue(token);
                localStorage.setItem("token", token);

                // The signed-in user info.
                const user =  result?.user?.reloadUserInfo?.screenName;
                console.log(user)

                localStorage.setItem("user", user);

                if (user) {
                    window.location = '/home'
                } else {
                    window.location = "/";
                }
                // ...
            }).catch((error) => {
                window.location = "/";
            });
    }


    return (
        <TokenContext.Provider value={{ tokenValue, signInAuth }}>
            {props.children}
        </TokenContext.Provider>
    )
}

export default TokenState
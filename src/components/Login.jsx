import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundCircles } from "./design/Hero";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { app } from "../db/fire";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const db = getDatabase(app);
        const userRef = ref(db, `users/${user.uid}`);
        set(userRef, {
          email: user.email,
          // Add more user profile data if needed
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-md rounded-lg shadow-lg p-8 ring-2 relative z-10">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-n-11 border rounded-md py-2 px-3"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-n-11 border rounded-md py-2 px-3"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button onClick={handleGoogleSignIn} className="w-full mt-2">
              Sign in with Google
            </Button>
          </form>
          <p className="text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-color-1">
              Register here
            </Link>
          </p>
        </div>
      </div>
      <BackgroundCircles />
      <ButtonGradient />
    </>
  );
};

export default Login;

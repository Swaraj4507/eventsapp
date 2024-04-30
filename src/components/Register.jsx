import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundCircles } from "./design/Hero";
import Button from "./Button";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { app } from "../db/fire";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // Create user profile in Realtime Database
        const db = getDatabase(app);
        const userRef = ref(db, `users/${user.uid}`);
        set(userRef, {
          email: user.email,
          // Add more user profile data if needed
        });
        console.log(userCredential);
        // const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Confirm Password:", confirmPassword);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center relative z-10">
        {" "}
        {/* Adjust z-index here */}
        <div className="max-w-md rounded-lg shadow-lg p-8 ring-2">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
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
            <div>
              <label htmlFor="confirmPassword" className="block mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-n-11 border rounded-md py-2 px-3"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <p className="text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-color-1">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <BackgroundCircles />
      <ButtonGradient />
    </>
  );
};

export default Register;

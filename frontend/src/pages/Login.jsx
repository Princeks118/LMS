import React, { useState } from "react";
import { useLoginMutation, useRegisterUserMutation } from "../features/api/authapi.js";

export const Login = () => {
  const [mode, setMode] = useState("login"); // "login" or "signup"

  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [login, { error: loginError, isLoading: loginLoading }] = useLoginMutation();
  const [registerUser, { error: registerError, isLoading: registerLoading }] = useRegisterUserMutation();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginInput).unwrap();
      console.log("Login success:", response);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(signupInput).unwrap();
      console.log("Signup success:", response);
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  const isLogin = mode === "login";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>

        {/* TOGGLE MODE */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setMode("login")}
            className={`px-4 py-2 rounded-l-xl text-sm font-semibold transition ${
              isLogin
                ? "bg-blue-600 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-4 py-2 rounded-r-xl text-sm font-semibold transition ${
              !isLogin
                ? "bg-green-600 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            Signup
          </button>
        </div>

        <form
          onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}
          className="space-y-4"
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={signupInput.name}
              onChange={(e) =>
                setSignupInput({ ...signupInput, name: e.target.value })
              }
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={isLogin ? loginInput.email : signupInput.email}
            onChange={(e) =>
              isLogin
                ? setLoginInput({ ...loginInput, email: e.target.value })
                : setSignupInput({ ...signupInput, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={isLogin ? loginInput.password : signupInput.password}
            onChange={(e) =>
              isLogin
                ? setLoginInput({ ...loginInput, password: e.target.value })
                : setSignupInput({ ...signupInput, password: e.target.value })
            }
            required
          />

          <button
            type="submit"
            disabled={isLogin ? loginLoading : registerLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-yellow-500 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition duration-300"
          >
            {isLogin
              ? loginLoading
                ? "Logging in..."
                : "Login"
              : registerLoading
              ? "Registering..."
              : "Sign Up"}
          </button>

          {(isLogin && loginError) && (
            <p className="text-red-400 text-sm mt-2 text-center">
              {loginError?.data?.message || "Login failed"}
            </p>
          )}
          {(!isLogin && registerError) && (
            <p className="text-red-400 text-sm mt-2 text-center">
              {registerError?.data?.message || "Signup failed"}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

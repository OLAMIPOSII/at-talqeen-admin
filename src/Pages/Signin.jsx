import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    if (email === "admin@at-talqeen.com" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      if (rememberMe) {
        localStorage.setItem("email", email);
      }

      navigate("/Dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <img
        src={assets.signin_logo}
        alt="Al-talqeen logo"
        className="absolute top-6 left-10 w-[184.52px]"
      />
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-2xl text-[#101822] font-semibold mb-3 text-center flex">
          Sign In
        </h2>
        <p className="text-[#667085] mb-8 text-base">
          Welcome back! Please sign in to continue.
        </p>

        <p className="text-[#344050] text-sm">Email.</p>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-8 border border-gray-300 rounded-lg"
        />

        <div className="relative mb-8">
          <p className="text-[#344050] text-sm">Password.</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3  border border-gray-300 rounded-lg"
          />
          <img
            src={assets.password_icon}
            alt="Show password"
            className="absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer "
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label
            htmlFor="rememberMe"
            className="text-sm text-[#667085] font-semibold"
          >
            Remember me
          </label>
        </div>

        <button
          onClick={handleSignin}
          className="w-full py-3 bg-[#0DAC5C] text-white font-semibold rounded-lg hover:bg-[#0c9a4d] focus:outline-none focus:ring-2 focus:ring-[#0DAC5C] focus:ring-opacity-50"
        >
          Sign in.
        </button>
      </div>
    </div>
  );
};

export default Signin;

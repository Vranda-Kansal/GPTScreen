import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [userStatus, setuserStatus] = useState(true);

  const handleClick = () => {
    setuserStatus(!userStatus);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-body"
        />
      </div>
      <form className="w-3/12 p-12 my-36 right-0 left-0 bg-opacity-70 bg-black mx-auto absolute rounded">
        <h1 className=" text-4xl text-white my-2 py-2">
          {" "}
          {userStatus ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!userStatus && (
          <input
            type="name"
            placeholder="Full Name"
            className="px-4 py-3 my-2 w-full bg-gray-700 rounded "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="px-4 py-3 my-2 w-full bg-gray-700 rounded "
        />
        <input
          type="text"
          placeholder="Password"
          className="px-4 py-3 my-2 w-full bg-gray-700 rounded"
        />
        <button className="px-4 py-3 my-6 w-full bg-[#e50914] text-white rounded">
          {userStatus ? "Sign In" : "Sign Up"}
        </button>
        {userStatus ? (
          <div>
            <span className="text-gray-700 px-2 py-3 my-2">
              New to Netflix?
            </span>
            <span
              className="text-white py-3 my-2 hover:cursor-pointer"
              onClick={handleClick}
            >
              {" "}
              {userStatus ? "Sign Up" : "Sign In"} now
            </span>
          </div>
        ) : (
          <div>
            <span className="text-gray-700 px-2 py-3 my-2">
              Already registered?
            </span>
            <span
              className="text-white py-3 my-2 hover:cursor-pointer"
              onClick={handleClick}
            >
              {" "}
              {userStatus ? "Sign Up" : "Sign In"} now
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;

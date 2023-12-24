import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [userStatus, setuserStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);

  // console.log(auth);
  const handleValidation = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    const validated = checkValidation(
      email.current.value,
      password.current.value
    );
    // console.log(validated);
    setErrorMessage(validated);

    if (validated) return;

    if (!userStatus) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // console.log(auth);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          // console.log(auth);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const handleClick = () => {
    setuserStatus(!userStatus);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-body"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 p-12 my-36 right-0 left-0 bg-opacity-70 bg-black mx-auto absolute rounded"
      >
        <h1 className=" text-4xl text-white my-2 py-2">
          {" "}
          {userStatus ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {errorMessage && (
          <p className="bg-[#e50914] text-white rounded text-center py-1 ">
            {errorMessage}
          </p>
        )}
        {!userStatus && (
          <input
            ref={name}
            type="name"
            placeholder="Full Name"
            className="px-4 py-3 my-2 w-full bg-gray-700 rounded "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="px-4 py-3 my-2 w-full bg-gray-700 rounded "
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="px-4 py-3 my-2 w-full bg-gray-700 rounded"
        />
        <ul className=" text-gray-500 text-xs pt-1 list-disc ml-3 ">
          <li>Atleast one upperCase Letter, one LowerCase Letter</li>
          <li>At least one digit</li>
          <li>Minimum 8 length</li>
        </ul>
        <button
          className="px-4 py-3 my-6 w-full bg-[#e50914] text-white rounded"
          onClick={handleValidation}
        >
          {userStatus ? "Sign In" : "Sign Up"}
        </button>
        {userStatus ? (
          <div>
            <span className="text-white px-2 py-3 my-2">New to Netflix?</span>
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

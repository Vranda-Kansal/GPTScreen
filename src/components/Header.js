import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptScreen } from "../utils/gptSlice";
import { SUPPORTED_LANGAUGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptScreen = useSelector((store) => store.gpt.showGptScreen);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleToggleClick = () => {
    dispatch(toggleGptScreen());
  };

  // console.log("header");
  const handleSignOut = () => {
    // console.log(auth);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("effect");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //on sign up or sign in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 md:py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row items-center md:justify-between">
      <img
        className="w-52 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="m-0 md:mt-5">
          {showGptScreen && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onClick={handleLanguageChange}
            >
              {SUPPORTED_LANGAUGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-[#e50914] text-white rounded p-2 mx-4"
            onClick={handleToggleClick}
          >
            {showGptScreen ? "Home Page" : " GPT Search"}
          </button>
          <button
            className="bg-[#e50914] text-white rounded p-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;

import { Provider } from "react-redux";
import Body from "./components/Body";
import "./index.css";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Body />
      </div>
    </Provider>
  );
};

export default App;

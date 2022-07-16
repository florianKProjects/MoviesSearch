import "./App.css";
import cinima2 from "./assets/clipart18632.png";
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Moveis from "./components/Movies/Moveis";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="logo-card">
          <img src={cinima2} alt="Cinina Logo" className="logo" />
          <h2 className="title">CINEMA</h2>
        </div>
        <div className="body">
          <TopBar />
          <hr className="separator" />
          <Moveis />
        </div>
      </div>
    </Provider>
  );
}

export default App;

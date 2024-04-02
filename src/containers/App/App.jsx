import { NavLink, Route, BrowserRouter, Routes } from "react-router-dom";

import PeoplePage from "../Peoples page/PeoplePage";
import HomePage from "../HomePage/HomePage";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/people" exact>
          People
        </NavLink>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/people" exact element={<PeoplePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

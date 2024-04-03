import { NavLink, Route, BrowserRouter, Routes } from "react-router-dom";

import PeoplePage from "../Peoples page/PeoplePage";
import HomePage from "../HomePage/HomePage";
import Header from "../../components/Header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

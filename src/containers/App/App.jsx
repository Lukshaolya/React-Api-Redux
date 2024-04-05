import { Route, BrowserRouter, Routes } from "react-router-dom";

import PeoplePage from "../Peoples page/PeoplePage";
import HomePage from "../HomePage/HomePage";
import Header from "../../components/Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import styles from "./App.module.css";
import PersonPage from "../PersonPage/PersonPage";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<PersonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

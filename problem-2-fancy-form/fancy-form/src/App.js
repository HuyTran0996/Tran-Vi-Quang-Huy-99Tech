import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";
import SwapPage from "./pages/SwapPage/SwapPage";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SwapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Planet from "./Pages/Planet/Planet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/:planetName" element={<Planet/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

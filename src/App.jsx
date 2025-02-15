import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Planet from "./Pages/Planet/Planet";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="w-full bg-[#070724] bg-center bg-repeat " style={{backgroundImage: "url('/public/Background.png')" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/:planetName" element={<Planet/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;

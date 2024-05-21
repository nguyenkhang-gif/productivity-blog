import { Route, Routes } from "react-router-dom";
import "./App.css";
import EpubGenerator from "./Pages/EpubGen/EpubGenerator.tsx";
import Home from "./Pages/Home/Home.tsx";
import TopNav from "./components/NavBar/TopNav.tsx";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="p-4 h-screen w-screen flex flex-col items-center justify-center ">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epubgen" element={<EpubGenerator />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

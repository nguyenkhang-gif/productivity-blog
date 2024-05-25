import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import EpubGenerator from "./Pages/EpubGen/EpubGenerator.tsx";
import Home from "./Pages/Home/Home.tsx";
import TopNav from "./components/NavBar/TopNav.tsx";
import { Toaster } from "react-hot-toast";
import BlogApp from "./Pages/BlogApp/BlogApp.tsx";
import Login from "./Pages/Login/Login.tsx";
import Signup from "./Pages/Signup/Signup.tsx";
import { useAuthContext } from "./context/authContext.tsx";
import UserProfile from "./Pages/BlogApp/UserProfile.tsx";
import { Pomodoro } from "./Pages/Pomodoro/Pomodoro.tsx";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className=" relative p-4 h-screen w-screen flex flex-col items-center justify-center overflow-y-scroll ">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BlogApp" element={<BlogApp />} />
        <Route path="/epubgen" element={<EpubGenerator />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
        <Route
          path="/Login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/Signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="/myprofile"
          element={!authUser ? <Navigate to={"/"} /> : <UserProfile />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/splash/splash.js";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to TickIt</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

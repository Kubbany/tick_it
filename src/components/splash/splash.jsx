import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/logo.js";
import "./splash.css";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <Logo width={230}/>
    </div>
  );
}

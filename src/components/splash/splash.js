import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./logo";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <Logo width={220} height={124} /> 
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#E7A87B",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

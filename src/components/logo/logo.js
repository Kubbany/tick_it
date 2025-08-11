
import TickItLogo from "../../assets/logo.svg";

export default function Logo({ width = 100 }) {
  return (
    <img
      src={TickItLogo}
      alt="Logo"
      style={{
        width: `${width}px`,
        height: "auto",
      }}
    />
  );
}

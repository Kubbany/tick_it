import React from "react";
import TickItLogo from "../../assets/logo.svg";

export default function Logo({ width = 100, height = 100 }) {
  return (
    <img
      src={TickItLogo}
      alt="Logo"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
}

import React from "react";

function Button({ text, onClick, disabled, style, type, className }) {
  return (
    <button
      type={type}
      style={{
        backgroundColor: "#00c68d",
        border: "none",
        width: "240px",
        height: "48px",
        background: "#00c68d",
        borderRadius: "12px",
        ...(style || {}),
      }}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
}

export default Button;
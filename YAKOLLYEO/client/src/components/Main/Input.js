import React from "react";

const defaultStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "12px 16px",
    gap: "10px",
    width: "240px",
    height: "22px",
    border: "1px solid #e4e6f0",
    borderRadius: "8px",
    color: "#000",
    backgroundColor: "rgb(232, 240, 254)",
    boxShadow: "none",
    fontSize: "16px",
    fontFamily: "snow",
    marginBottom: "-10px"
};

function Input({ label, name, type, value, onChange, error, style }) {
  const combinedStyle = style ? Object.assign({}, defaultStyle, style) : defaultStyle;

  return (
    <div className="input-box">
      <label className="input_label" htmlFor={name}>{label}</label>
      <input style={combinedStyle}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Input
import React from "react";
import Typical from "react-typical";
export default function Typing(props) {
  return (
    <div style={{ color: "gold", paddingLeft: "10%" }}>
      <p
        style={{
          color: "white",
          fontWeight: "bolder",
          fontSize: "3.75rem",
          fontFamily: "'Roboto', serif",
          marginTop: "10%",
        }}
      >
        A website for CTF
      </p>
      <h1 style={{ fontFamily: "'Roboto', serif" }}>
        <Typical loop={Infinity} wrapper="b" steps={props.words} />
      </h1>
      <h2 style={{ marginTop: "15%", fontFamily: "'Roboto', serif" }}>
        A fun & engaging way to dive into the domain of CTF.
      </h2>
    </div>
  );
}

// Resume.jsx

import React from "react";

const Resume = () => {
  const openResume = () => {
    window.open("https://abhijeetresume.tiiny.site", "_blank");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Resume</h1>
      
      {/* Button to open the resume */}
      <button style={styles.button} onClick={openResume}>Download Resume</button>

      {/* Embedded iframe (optional) */}
      <iframe
        title="Resume"
        src="https://abhijeetresume.tiiny.site"
        width="80%"
        height="400px"
        style={styles.iframe}
      ></iframe>
    </div>
  );
};

export default Resume;

const styles = {
  container: {
   // textAlign: "center",
    marginTop: "50px",
  },
  title: {
    fontSize: "24px",
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
  iframe: {
    marginTop: "20px",
  },
};

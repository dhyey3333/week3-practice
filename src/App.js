import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
        padding: "40px",
        color: "white",
        fontFamily: "Segoe UI"
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>
        🚀 Digizura Employee Portal
      </h1>

      <p style={{ opacity: 0.8 }}>
        Welcome back, Dhyey
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        <div style={cardStyle}>
          <h2>120</h2>
          <p>Total Employees</p>
        </div>

        <div style={cardStyle}>
          <h2>15</h2>
          <p>Projects Running</p>
        </div>

        <div style={cardStyle}>
          <h2>320</h2>
          <p>Tasks Completed</p>
        </div>

        <div style={cardStyle}>
          <h2>₹2.5Cr</h2>
          <p>Revenue</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "rgba(255,255,255,0.1)",
          padding: "25px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)"
        }}
      >
        <h2>📢 Announcements</h2>

        <ul>
          <li>React Training - Monday</li>
          <li>Team Meeting - Friday</li>
          <li>Bootstrap Workshop - Next Week</li>
        </ul>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  padding: "25px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
};

export default App;
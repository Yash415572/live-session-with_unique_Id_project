import { useState } from "react";
import axios from "axios";
import VideoPlayer from "../components/VideoPlayer";

function AdminPage() {
  const [session, setSession] = useState(null);

  const startSession = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/sessions");
      setSession(res.data);
    } catch (err) {
      console.error("Error creating session:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Admin Live Session</h1>

      {!session ? (
        <button
          onClick={startSession}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          START SESSION
        </button>
      ) : (
        <>
          <h3>Session Started </h3>
          <p><b>Share this link with student:</b></p>
          <a href={session.userurl} target="_blank" rel="noreferrer">
            {session.userurl}
          </a>

          <div style={{ marginTop: "30px" }}>
            <VideoPlayer />
          </div>
        </>
      )}
    </div>
  );
}

export default AdminPage;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import VideoPlayer from "../components/VideoPlayer";

function StudentPage() {
  const { uniqueId } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/sessions/${uniqueId}`)
      .then((res) => setSession(res.data))
      .catch((err) => console.error("Error loading session:", err));
  }, [uniqueId]);

  if (!session) return <h3>Loading session...</h3>;

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Student Live Session</h1>
      <p>Session ID: {session.uniqueId}</p>
      <VideoPlayer />
    </div>
  );
}

export default StudentPage;
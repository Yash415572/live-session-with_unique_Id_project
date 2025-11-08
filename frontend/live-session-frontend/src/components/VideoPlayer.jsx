function VideoPlayer() {
  return (
    <video
      width="720"
      height="480"
      controls
      style={{
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
        marginTop: "10px",
      }}
    >
      <source src="http://localhost:8080/sample.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;

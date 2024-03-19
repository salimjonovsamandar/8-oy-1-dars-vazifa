import "./App.css";
import PersonalVideoPlayer from "./components/PersonalVideoPlayer";
import videoUrl from "../src/assets/AJOYIB.mp4";

function App() {
  return (
    <>
      <h1>Shaxsiy Video</h1>
      <PersonalVideoPlayer
        videoUrl={videoUrl}
        controlsList="nodownload"
        preload="metadata"
        crossorigin="anonymous"
      />
    </>
  );
}

export default App;

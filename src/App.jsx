import Nav from "./components/Nav";
import Jumbotron from "./components/jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef,useState, useEffect } from "react";
import Loader from "./components/Loader";



function App() {

  const webgiViewerRef = useRef();
  const contentRef = useRef();


  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

 

  return (
    <div className="App">
      <Loader/>
      <div id="content" ref={contentRef}>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>

      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;

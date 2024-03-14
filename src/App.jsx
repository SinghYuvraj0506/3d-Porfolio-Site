import { BrowserRouter } from "react-router-dom";

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

const App = () => {

  mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, {debug: true});

  useEffect(() => {
    mixpanel.track("Visit the Website")
  }, [])

  if(window.screen.width < 600){
    return <div className="w-screen h-screen flex gap-5 flex-col items-center justify-center text-center px-4 box-border">
      Portfolio contains complex 3d models

      <button className="border border-grey p-2 rounded-lg text-sm" onClick={()=>{window.open("https://www.linkedin.com/in/singh-yuvraj002/","_self")}}>View on Linkedin</button>
    </div>
  }
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      {/* <section id="projects" className="text-gray-400 bg-gray-900 body-font flex flex-wrap" >
      <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
      width="560" height="315"
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
<iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
width="560" height="315"
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
        </section> */}
    
      <Skills />
      
      <Contact />
    </main>
  );
}
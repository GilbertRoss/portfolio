import React from "react";
import "./App.css";
import "./07.png"


function App() {
  return (
    <div className="container">
      <div>
        <div class="flex flex-row  mt-4 menu-container">
          <div class="flex flex-row ">
            <div class="text-gray-700 text-center px-4 py-2 m-2">
              sb.
          </div>
          </div>
          <div class="flex flex-row text-gray-700 float-left menu-bar">
            <div class="text-gray-700 text-center px-4 py-2 m-2 font-color-menu">Curriculum</div>
            <div class="text-gray-700 text-center px-4 py-2 m-2 font-color-menu">Projects</div>
            <div class="text-gray-700 text-center px-4 py-2 m-2 font-color-menu">Contact me</div>
          </div>
        </div>
        </div>
        <section>
        <div className="flex flex-row">
          <div className="title">Hello, my name is Sadman! I am Software developer based in Bolzano.</div>
          <div class="title-img"><img src={require('./07.png')} /></div>
        </div>
        </section>
    </div>
  );
}

export default App;

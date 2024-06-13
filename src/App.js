import React from "react";
import Header from "./Components/Header";
import { Information } from "./Components/Information";
import Introduction from "./Components/Introduction";
import Facts from "./Components/Facts";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import { INFORMATIONS } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <section id="informations">
          <ul>
            <Information {...INFORMATIONS[0]}/>
            <Information {...INFORMATIONS[1]}/>
            <Information {...INFORMATIONS[2]}/>
          </ul>
        </section>
        <Gallery />
        <Facts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

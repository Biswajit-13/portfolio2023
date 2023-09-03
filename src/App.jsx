import React from "react";
import Projects from "./component/projects";
import Services from "./component/services";
import Aboutme from "./component/aboutme";
import Education from "./component/education";
import ContactMe from "./component/contactMe";
import Ratings from "./component/ratings";
import Footer from "./component/footer";
export default function App() {
  return (
    <div className="px-10 lg:px-28 mx:auto bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
      <Aboutme />
      <Services />
      <Projects />
      <Ratings />
      <ContactMe />
      <Footer/>
    </div>
  )
}
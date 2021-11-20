import React from "react";

import theHighFive from "../assets/images/image3.jpeg"

const About = () => {
  return (
    <section className="about">
      <h3 className="name">
        Annawon Weeden
      </h3>
      <img className="high-five" src={theHighFive} alt="this is Annawon dressed in authentic wompanoag clothes." />
      <p className="about-text" >Annawon Weeden is an enrolled member of his mother's Mashpee Wampanoag tribal community located on Cape Cod.
        He currently works in the MPTN Cultural Resource Dept. as the Eastern Woodland song/dance instructor for his father's 
        Mashantucket Pequot Tribal community located on their reservation in southeastern CT. Growing up on the Narragansett 
        reservation in south coastal RI, Annawon was instructed on the traditional dances &amp; customs of New England natives 
        throughout his entire life. As an adult, traveling abroad visiting many other tribes across the U.S., Annawon has developed 
        a comprehensive understanding of the vast diversity among many native customs.Annawon looks forward to any opportunity to 
        share his cultural knowledge with public audiences while engaging others in cultural preservation for future generations 
        of better understanding. 
      </p>
    </section>
  )
};

export default About;
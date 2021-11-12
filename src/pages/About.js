import theHighFive from "../assets/images/image3.jpeg"

const About = () => {
  return (
    <main className="centered-bottom" role="main">
      <div className="main section" id="page_body" name="Page Body">
        <h3 className="post-title entry-title">
          Annawon Weeden
        </h3>
        <div className="post-body-container">
          <img className="high-five" src={theHighFive} alt="this is Annawon dressed in authentic wompanoag clothes." />
          <div>
            <p>Annawon Weeden is an enrolled member of his mother's Mashpee Wampanoag tribal community located on Cape Cod.
              He currently works in the MPTN Cultural Resource Dept. as the Eastern Woodland song/dance instructor for his father's 
              Mashantucket Pequot Tribal community located on their reservation in southeastern CT.Growing up on the Narragansett 
              reservation in south coastal RI, Annawon was instructed on the traditional dances &amp; customs of New England natives 
              throughout his entire life. As an adult, traveling abroad visiting many other tribes across the U.S., Annawon has developed 
              a comprehensive understanding of the vast diversity among many native customs.Annawon looks forward to any opportunity to 
              share his cultural knowledge with public audiences while engaging others in cultural preservation for future generations 
              of better understanding. 
            </p>
          </div>
        </div>
      </div>
    </main>
  )
};

export default About;
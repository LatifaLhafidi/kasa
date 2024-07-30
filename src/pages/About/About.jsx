import React from "react";
import image2 from "../../assets/Image source 2.png";
import Banner from "../../components/Banner/Banner";
import data from "../../data/collapse.json"; // Importez les données de data.json
import Collapse from "../../components/Collapse/Collapse";
function About() {
  return (
    <div >
      <Banner imageSrc={image2} />
      {data.map((item, index) => (
        <Collapse
          key={index}
          title={item.aboutTitle} // Utilisez les données nécessaires provenant de data.json
          text={item.aboutText} // Utilisez les données nécessaires provenant de data.json
        />
      ))}
    </div>
  );
}

export default About;
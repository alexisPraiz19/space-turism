/* components */
import Menu from "../Menu";

/* styles */
import '../../css/technology.css';

/* tools */
import { useEffect } from "react";
import { data } from "../../../public/assets/data";

function Technology() {
  /* functions */
  useEffect(()=>{
    const techLinks   = document.querySelector('.technology-links');
    const vehicle     = document.querySelector('.vehicle-name');
    const description = document.querySelector('.technology-description');
    const techImage   = document.querySelector('.img-technology');

    techLinks.addEventListener('click',e=>{
      const techData = data.technology.find(tech => tech.name == e.target.id);

      vehicle.textContent = techData.name;
      description.textContent = techData.description;
      techImage.setAttribute('src',techData.images.portrait);
    });   
  });

  /* component */
  return (
    <section className="technology">
        <Menu/>

        <h2 className="technology-title">
            <span className="number-page_title">03</span>
            space launch 101
        </h2>

        <div className="technology-content">
          <div className="technology-texts">
            <ul className="technology-links">
              <li className="technology-link" id="Launch vehicle">1</li>
              <li className="technology-link" id="Spaceport">2</li>
              <li className="technology-link" id="Space capsule">3</li>
            </ul>

            <div className="technology-text color-default">
              <span>the terminology...</span>
              <h2 className="vehicle-name">Launch Vehicle</h2>

              <p className="technology-description">
                A launch vehicle or carrier rocket is a rocket-propelled 
                vehicle used to carry a payload from Earth's surface to 
                space, usually to Earth orbit or beyond. Our WEB-X 
                carrier rocket is the most powerful in operation. 
                Standing 150 metres tall, it's quite an awe-inspiring sight 
                on the launch pad!
              </p>
            </div>
          </div>

          <figure className="technology-img_figure">
              <img src="../../assets/technology/image-launch-vehicle-portrait.jpg" alt="img-technology" className="img-technology"/>
            </figure>
        </div>
    </section>
  )
}

export default Technology;
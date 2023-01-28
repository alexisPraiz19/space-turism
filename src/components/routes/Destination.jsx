/* Components */
import Menu from "../Menu";

/* Styles */
import "../../css/destination.css";

/* Tools */
import { useEffect} from "react";
import { data } from "../../../public/assets/data";


export default function Destination(){
    useEffect(()=>{  
        const planetsLinks = document.querySelector('.planets-links');

        const barWidth = planetsLinks.querySelector('li').offsetWidth;
        const barSlide = document.querySelector('.bar-slide_planets');
        barSlide.style = `width: ${barWidth}px;`;

        const planetName        = document.querySelector('.planet-name');
        const planetDescription = document.querySelector('.planet-description_text');
        const planetDistance    = document.querySelector('.distance');
        const planetEstTravel   = document.querySelector('.est-travel');

        planetsLinks.addEventListener('click',e=>{
            const planetData = data.destinations.find(planet => planet.name == e.target.id);
                  
            planetName.textContent        = planetData.name;
            planetDescription.textContent = planetData.description;
            planetDistance.textContent    = planetData.distance;
            planetEstTravel.textContent   = planetData.travel;
            const number = e.target.dataset.id;
            const barWidth = e.target.offsetWidth;

            document.querySelectorAll('.planet-img_figure').forEach(planetImg => planetImg.style = `transform: translateX(-${number}00%)`);   
            barSlide.style = `transform: translateX(${number}00%); width: ${barWidth}px`;   
        });

        window.addEventListener('resize',e=>{
            const barWidth = planetsLinks.querySelector('li').offsetWidth;
            const barSlide = document.querySelector('.bar-slide_planets');
            barSlide.style = `width: ${barWidth}px;`;
        });
    });
    
    return(
       <section className="destination">
           <Menu/>

            <h2 className="destination-title">
               <span className="number-page_title">01</span>
               pick your destination
            </h2>

           <div className="destination-content">
               <div className="planet-img_slider">
                   <div className="planet-img_slide">
                        <figure className="planet-img_figure">
                            <img src="../../assets/destination/image-moon.png" alt="planet" className="planet-img"/>
                        </figure>

                        <figure className="planet-img_figure">
                            <img src="../../assets/destination/image-mars.png" alt="planet" className="planet-img"/>
                        </figure>

                        <figure className="planet-img_figure">
                            <img src="../../assets/destination/image-europa.png" alt="planet" className="planet-img"/>
                        </figure>

                        <figure className="planet-img_figure">
                            <img src="../../assets/destination/image-titan.png" alt="planet" className="planet-img"/>
                        </figure>
                   </div>
               </div>

               <div className="planet-description color-default">
                    <ul className="planets-links">
                        <li id="Moon" data-id="0">moon</li>
                        <li id="Mars" data-id="1">mars</li>
                        <li id="Europa" data-id="2">europe</li>
                        <li id="Titan" data-id="3">titan</li>
                        <li className="bar-slide_planets"></li>
                    </ul>

                    <h2 className="planet-name">moon</h2>

                    <p className="planet-description_text">
                       See our planet as you’ve never seen it before. A perfect 
                       relaxing trip away to help regain perspective and come back refreshed. 
                       While you’re there, take in some history by visiting the Luna 2 and 
                       Apollo 11 landing sites.
                    </p>

                    <div className="travel-details">
                        <div className="travel-detail">
                            <span>avg. distance</span>
                            <span className="distance">225 mil. km</span>
                        </div>

                        <div className="travel-detail">
                            <span>est. travel time</span>
                            <span className="est-travel">9 months</span>
                        </div>
                    </div>
               </div>
           </div>
       </section>
    )
}
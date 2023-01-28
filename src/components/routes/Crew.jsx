/* components */
import Menu from "../Menu";

/* styles */
import '../../css/crew.css'

/* tools */
import { useEffect } from "react";
import { data } from '../../../public/assets/data';

export default function Crew(){
    useEffect(()=>{
        const crewList  = document.querySelector('.show-crew_options');
        const crewRol   = document.querySelector('.rol');
        const crewName  = document.querySelector('.name');
        const crewBio   = document.querySelector('.crew-role_text');
        const crewImage = document.querySelector('.crew-img');
        const circle    = document.querySelectorAll('.circle-check');

        crewList.addEventListener('click',e=>{
            if(e.target.tagName == 'INPUT'){
                const crewData = data.crew.find(data => data.name == e.target.id);

                crewRol.textContent  = crewData.role;
                crewName.textContent = crewData.name;
                crewBio.textContent  = crewData.bio;
                crewImage.setAttribute('src', crewData.images.png);

                const crewActive = e.target.previousElementSibling;
                
                if(crewActive.htmlFor == crewData.name){
                    crewActive.classList.add('crew-active');
                    circle.forEach(circle =>{
                        if(circle.classList.contains('crew-active') && circle.htmlFor != crewActive.htmlFor) circle.classList.remove('crew-active')
                    });
                };
            };
        });
    });

    /* component */
    return(
        <section className="crew">
            <Menu/>

            <h2 className="crew-title">
               <span className="number-page_title">02</span>
               meet your crew
            </h2>

            <div className="crew-content color-default">
                <div className="crew-texts">
                    <div className="crew-role">
                        <span className="rol">flight engineer</span>
                        <p className="name">anousheh ansari</p>
                    </div>

                    <p className="crew-role_text">
                        Anousheh Ansari is an Iranian American engineer and co-
                        founder of Prodea Systems. Ansari was the fourth self-
                        funded space tourist, the first self-funded woman to fly
                        to the ISS, and the first Iranian in space.
                    </p>

                    <ul className="show-crew_options">
                        <li className="show-crew_option">
                            <label htmlFor="Douglas Hurley" className="circle-check"></label>
                            <input type="checkbox" id="Douglas Hurley" className="input-check"/>
                        </li>

                        <li className="show-crew_option">
                            <label htmlFor="Mark Shuttleworth" className="circle-check"></label>
                            <input type="checkbox" id="Mark Shuttleworth" className="input-check"/>
                        </li>

                        <li className="show-crew_option">
                            <label htmlFor="Victor Glover" className="circle-check"></label>
                            <input type="checkbox" id="Victor Glover" className="input-check"/>
                        </li>

                        <li className="show-crew_option">
                            <label htmlFor="Anousheh Ansari" className="circle-check crew-active"></label>
                            <input type="checkbox" id="Anousheh Ansari" className="input-check"/>
                        </li>
                    </ul>
                </div>

                <figure className="crew-img_figure">
                    <img src="../../assets/crew/image-anousheh-ansari.png" alt="crew-img" className="crew-img"/>
                </figure>
            </div>
        </section>
    )
}
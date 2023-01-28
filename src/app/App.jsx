/* components */
import Menu from '../components/Menu';
/* css */
import '../css/home.css';
/* tools */
import { Link } from 'react-router-dom';


export default function App(){
  return (
    <section className="home">
      <Menu/>

      <div className="home-content color-default">
        <p className="home-text">
          <span className="home-text_mayus">
            so, you want to travel to <br/>
          </span>

          <span className="home-text_mayus space">space</span> <br/>
          
          let's face it; if you want to go to space, you might as well
          genuinely go to outer space and hover kind of of on the 
          edge of it. Will sit back, and relax because we'll give you 
          a truly out of this world experiencie!         
        </p>

        <figure className="home-link_container">
          <Link to='/destination' className="home-link">explore</Link>
        </figure>
      </div>
    </section>
  )
}

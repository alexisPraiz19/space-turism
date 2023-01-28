import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '../assets/shared/Logo';
import '../css/menu.css';


export default function Menu(){
    useEffect(()=>{
        document.querySelector('.header').addEventListener('click',e=>{
            const target = e.target.classList;
            const menu   = document.querySelector('.menu');

            if(target.contains('icon-hamburger')){menu.style = 'clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);'}
            else if(target.contains('icon--close')){menu.style = 'clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);'}
        });
    });
    return(
        <header className='header'>
            <Logo/>

            <span className="icon-hamburger"></span>

            <nav className='menu'>
                <ul className='menu-ul'>
                    <li className="icon-close">
                        <span className="icon--close"></span>
                    </li>
                    <li><Link to='/' className='ancla'><span className='nav-index'>00</span> home</Link></li>
                    <li><Link to='/destination' className='ancla'><span className='nav-index'>01</span> destination</Link></li>
                    <li><Link to='/crew' className='ancla'><span className='nav-index'>02</span> crew</Link></li>
                    <li><Link to='/technology' className='ancla'><span className='nav-index'>03</span> technology</Link></li>
                </ul>
            </nav>
        </header>
    );
};
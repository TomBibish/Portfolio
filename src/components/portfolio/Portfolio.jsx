import React from "react";
import './portfolio.css';
import SPORTWOW from '../../assets/sport_wow_home.jpeg'
import MOVIES from '../../assets/movies.jpg'
import EXPENSE from '../../assets/ExpenseApp.jpg'
import LOOPMACHINE from '../../assets/loop machine.jpg'
const Portfolio = () => {
    return(
        <section id="portfolio">
            <h5 style={{textAlign:"center"}}>My Recent Work</h5>
            <h2 style={{textAlign:"center"}}>Portfolio</h2>
            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={SPORTWOW} alt="movies"/>
                    </div>
                    <h3>SportWoW</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/TomBibish/SportWowReact" className='btn' target="_blank">GitHub </a>
                        <a href="http://ec2-23-20-72-95.compute-1.amazonaws.com/" className='btn btn-primary' target="_blank">
                            Check Out
                        </a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={MOVIES} alt="movies"/>
                    </div>
                        <h3>MovieApp</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/TomBibish/MovieApp" className='btn' target="_blank">GitHub </a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={EXPENSE} alt="movies"/>
                    </div>
                    <h3>ExpenseApp</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/TomBibish/ExpenseApp.git" className='btn' target="_blank">GitHub </a>
                        <a href="https://expense-app-one.vercel.app/" className='btn btn-primary' target="_blank">
                            Check Out
                        </a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={LOOPMACHINE} alt="movies"/>
                    </div>
                    <h3>Loop Machine</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/TomBibish/LoopMachine" className='btn' target="_blank">GitHub </a>
                        <a href="https://loop-machine-moveo.herokuapp.com/" className='btn btn-primary' target="_blank">
                            Check Out
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Portfolio
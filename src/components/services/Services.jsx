import React from "react";
import './services.css';
import {BiCheck} from "react-icons/bi";

const Services = () => {
    return(
        <section id="services">
            <h5 style={{textAlign:"center"}}>What I Offer</h5>
            <h2 style={{textAlign:"center"}}>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Building Websites from 0 to 100</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Connect beetween front&back</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Manage data in sqlDB</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Deploy websites</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Backend Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Great knowledge in Python</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Build API using Django</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Data structures, Object oriented </p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Logic thinking about solving missions</p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Frontend Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>React - Class and Functional Components</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Good skills in CSS3 & HTML5</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Basic Knowledge in pure JS</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}
export default Services
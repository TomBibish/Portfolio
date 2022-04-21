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
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
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
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
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
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Lorem ipsum</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}
export default Services
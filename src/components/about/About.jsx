import React from "react";
import './about.css';
import SMILE from '../../assets/smile.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
    return(
        <section id='about'>
            <h5 style={{textAlign:"center"}}>Get To Know</h5>
            <h2 style={{textAlign:"center"}}>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className={"about__me-image"}>
                        <img src={SMILE} alt={"About Image"}/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Junior</small>
                        </article>

                        <article className="about__card">
                            <FaGraduationCap className='about__icon'/>
                            <h5>FullStack Devloper Course</h5>
                            <small>At John Bryce</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>Python, React etc..</small>
                        </article>
                    </div>
                        <p>
                            A developer with demonstrated history of working in the military industry.
                            Skilled in Creativity Skills, Leadership, Full-Stack Development.
                            Diploma of Python Full Stack Deveoper from John Bryce Academy.
                            Passionate about new technologies and challenges,
                            Experienced with working under pressure and in a team.
                        </p>

                        <a href='#contact' className={'btn btn-primary'}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About
import React from 'react';
import html from '../../images/Logos/html.png';
import css from '../../images/Logos/css.png';
import javascript from '../../images/Logos/javascript.png';
import node from '../../images/Logos/node.png';
import react from '../../images/Logos/react.png';
import mongo from '../../images/Logos/mongodb.png';
import sass from '../../images/Logos/sass.png';
import redux from '../../images/Logos/redux.png';
import bootstrap from '../../images/Logos/bootstrap.png';
import materialize from '../../images/Logos/materialize.png';


const Landing = () => {

    return (
        <section className="scrollspy" id="home">
           
            <div className="landing">

               

                <div className="landing-greeting">
                    <h1 className="greeting">Hi, I'm Vicky!</h1>
                    <h2 className="subtitle">I'm a Full Stack Developer specializing in:</h2>
                </div>

                <div className="landing-languages">
                    <a href="#csudh" className="language html"> <img src={html} alt="" className="language-logo" /> HTML</a>
                    <a href="#csudh" className="language css"> <img src={css} alt="" className="language-logo" /> CSS</a>
                    <a href="#csudh" className="language js"> <img src={javascript} alt="" className="language-logo" /> JavaScript</a>
                </div>

                <div className="landing-languages shift">
                    <a href="#hillbrewing" className="language node"> <img src={node} alt="" className="language-logo" /> Node.js</a>
                    <a href="#hillbrewing" className="language react"> <img src={react} alt="" className="language-logo" /> React.js</a>
                    <a href="#hillbrewing" className="language mongo"> <img src={mongo} alt="" className="language-logo" /> MongoDB</a>
                </div>
                <div className="landing-languages">
                    <a href="#hillbrewing" className="language redux"> <img src={redux} alt="" className="language-logo" /> Redux</a>
                    <a href="#hillbrewing" className="language sass"> <img src={sass} alt="" className="language-logo" /> Sass</a>
                    <a href="#csudh" className="language materialize"> <img src={materialize} alt="" className="language-logo" /> Materialize</a>
                </div>
            </div>
        </section>
    )
}



export default Landing
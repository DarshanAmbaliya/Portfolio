import React from "react";
import '../about/css/about.css';
import { NavLink } from "react-router-dom";

const About = () => {
  const edjucation = [
    {
      id: 1,
      imgsrc: "../img/GTU.jpg",
      name: "Makawana Consultancy Service",
      year: "Aug 2023-Present·7 mths"
    },
    {
      id: 2,
      imgsrc: "../img/GTU.jpg",
      name: "Makawana Consultancy Service",
      year: "Aug 2023-Present·7 mths"
    },
    {
      id: 3,
      imgsrc: "../img/Scet.png",
      name: "Sarvajanik College of Engineering & Technology",
      year: "June 2019 - June 2023"
    },
  ]

  const skill = [
    {
      id: 4,
      name: "HTML/CSS",
      percentage: { "width": "90%" },
      year: "2",
    },
    {
      id: 5,
      name: "Javascipt",
      percentage: { "width": "85%" },
      year: "1.5",
    },
    {
      id: 6,
      name: "React",
      percentage: { "width": "80%" },
      year: "1",
    },
    {
      id: 7,
      name: "shopify",
      percentage: { "width": "98%" },
      year: "1",
    },
  ]

  const tech = [
    {
      name: "HTML5",
      intro: "markup lang."
    },
    {
      name: "CSS3",
      intro: "Stylesheet Lang."
    },
    {
      name: "SASS",
      intro: "CSS preprocessor"
    },
    {
      name: "Bootstrap",
      intro: "CSS Framework"
    },
    {
      name: "JavaScript",
      intro: "ES5/ES6"
    },
    {
      name: "JQuery",
      intro: "JS Library"
    },
    {
      name: "React",
      intro: "JS Library"
    },
    {
      name: "Redux",
      intro: "State Management"
    },
    {
      name: "Redux Toolkit",
      intro: "State Management"
    },
    {
      name: "Shopify",
      intro: "E-commerce"
    },
    {
      name: "git",
      intro: "version control"
    },
    {
      name: "visual studio",
      intro: "IDE"
    },
  ]

  return (
    <>
      {/* banner-section start */}
      <section className="about-banner-section" style={{backgroundImage: "url(https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1654419622/img/about-banner.jpg)"}}>
      </section>
      {/* banner-section end */}

      {/* personal-info section start */}
      <section className="personal-info-section">
        <div className="container">
          <div className="row">
            <div className="image">
              <img src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1667817743/img/linkedin-office-photo-tp_jjfyuo.jpg" alt="" />
            </div>
            <div className="main-box flex justify-between align-center">
              <div className="box-1">
                <div className="content">
                  <h3>darshan ambaliya</h3>
                  <p>Front End Developer at <span>mcs</span> | HTML | CSS | JAVASCRIPT | JQUERY | REACT</p>
                  <div className="country">
                    <p>India •</p>
                    <NavLink to="/contact">&nbsp;Contact info</NavLink>
                  </div>
                  <span>200+ Connections</span>
                  <div className="btn-link">
                    <div className="btn">
                      <a href="">download CV</a>
                    </div>
                    <div className="btn">
                      <a href="">view linkdin</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-2">
                <div className="content">
                  <ul>
                    {
                      edjucation.map((val) => {
                        const { id, imgsrc, name, year } = val;
                        return (
                          <li key={id}>
                            <div className="image">
                              <img src={imgsrc} alt="" />
                            </div>
                            <div className="detail">
                              <a href="#">{name}</a>
                              <span>{year}</span>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* personal-info section end */}

      <hr />

      {/* about-section start */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <h2>about</h2>
            </div>
            <div className="detail">
              <p>As a Front End Developer at Next, I apply my technical and creative skills to develop and test complex and user-friendly websites/components for a leading clothing, footwear and home products retailer.</p>
              <p>I work within an agile team, using various languages, tools and frameworks, such as React, TypeScript, JavaScript, CSS, HTML, Monetate and Figma. I act as a point of escalation for front-end development queries, plan and manage projects from inception to completion, and contribute to the development of A/B tests, realising an uplift of £10M.</p>
              <p>Before joining Next, I worked as a Front End Developer for The Watches of Switzerland Group, where I was the dedicated UK and USA Developer for Rolex and the official representative for The WOS Group. I created a bespoke website journey for Rolex, adhering to their strict design and development requirements, and shipped features continuously into production using an agile product development flow.</p>
              <p>I also founded and managed Monocode, an innovative digital agency, where I combined both creative and technical aspects of design and development to optimise clients’ online presence and brand awareness. I have a BA (Hons) in Fine Art from De Montfort University, and I am passionate about creating unique and engaging digital experiences.</p>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}

      <hr />

      {/* skill-section start */}
      <section className="skill-section">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <h2>skill</h2>
            </div>
            <div className="box">
              <ul>
                {
                  skill.map((val) => {
                    const { id, name, percentage, year } = val;
                    return (
                      <>
                        <li key={id}>
                          <div className="skill-year">
                            <p>{name}</p>
                            <span>{year} yrs</span>
                          </div>
                          <div className="progress">
                            <div className="range" style={percentage}></div>
                          </div>
                        </li>

                      </>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* skill-section end */}

      <hr />

      {/* tech-stack-section start */}
      <section className="tech-section">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <h2>tech stack</h2>
            </div>
            <div className="technology">
              <ul>
                {
                  tech.map((val) => {
                    const { name, intro } = val;
                    return (
                      <>
                        <li>
                          <h3>{name}</h3>
                          <span>{intro}</span>
                        </li>
                      </>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* tech-stack-section end */}
    </>
  )
}

export default About;
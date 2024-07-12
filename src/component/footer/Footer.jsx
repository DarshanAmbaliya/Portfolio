import React from "react";
import '../footer/css/footer.css'

const Footer = () => {
  const socialMedia = [
    {
      id: Math.floor((Math.random) * 1000),
      link: "#",
      name: "github"
    },
    {
      id: Math.floor((Math.random) * 1000),
      link: "#",
      name: "linkdin"
    },
    {
      id: Math.floor((Math.random) * 1000),
      link: "#",
      name: "codepen"
    },
    {
      id: Math.floor((Math.random) * 1000),
      link: "#",
      name: "figma"
    },
  ]
  const icon = [
    {
      id: Math.floor((Math.random) * 1000),
      path: "fa-brands fa-html5",
    },
    {
      id: Math.floor((Math.random) * 1000),
      path: "fa-brands fa-css3-alt",
    },
    {
      id: Math.floor((Math.random) * 1000),
      path: "fa-brands fa-sass",
    },
    {
      id: Math.floor((Math.random) * 1000),
      path: "fa-brands fa-js",
    },
    {
      id: Math.floor((Math.random) * 1000),
      path: "fa-brands fa-react",
    },
  ]
  return (
    <>
      <footer>
        <div className="container">
          <div className="row flex justify-between align-center">
            <div className="social-media">
              <ul>
                {
                  socialMedia.map((val) => {
                    const { id, link, name } = val;

                    return (
                      <>
                        <li key={id}>
                          <a href={link}>{name}</a>
                        </li>
                      </>
                    )
                  })
                }
              </ul>
            </div>
            <div className="copyright">
              <p>© Darshan Ambaliya {new Date().getFullYear()} | All rights reserved</p>
              <div className="language">
                <ul>
                  {
                    icon.map((val) => {
                      const { id, path } = val;

                      return (
                        <>
                          <li key={id}>
                            <a href="#">
                              <i className={path}></i>
                            </a>
                          </li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
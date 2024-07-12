import React, { useEffect, useRef, useState } from "react";
import '../portfolio/css/portfolio.css';
import axios from "axios";

const Portfolio = () => {
  const [news, setNews] = useState();
  // const [position, setPosition] = useState({ lat: 23.0064128, long: 72.5024768 });
  // const [temp, setTemp] = useState()
  const [speed, setSpeed] = useState(5)
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const time = date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0');
  const [ctime, setCurrentTime] = useState(time);


  useEffect(() => {
    const intervalId = setInterval(() => {
      // if (date.getHours() >= 12) {
      //   var hour = date.getHours() - 12;
      // }
      const time = date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0');
      setCurrentTime(time);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    (async () => {
      // const res = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8b8e058b88124ee1a705333ff2e5b776`)
      const res = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_38982a507de3a585e08d1d24c0aab9d2f9a88&q=technology&language=en&category=technology`)
      const data = res.data.results;
      const news = data[(Math.floor(Math.random() * data.length))]
      setNews(news);
      console.log(news);
    })();
  }, [])

  const fanSpeed = (e) => {
    e.preventDefault();
    const status = e.target.getAttribute("data-custom")
    setSpeed(status)
  }

  const fanBtn = [
    {
      id: 0,
      speed: 0,
      name: "OFF",
    },
    {
      id: 1,
      speed: 3,
      name: 1,
    },
    {
      id: 2,
      speed: 2,
      name: 2,
    },
    {
      id: 3,
      speed: 1,
      name: 3,
    },
  ]

  const techImage = [
    {
      id: 4,
      imgsrc: "../img/react.png"
    },
    {
      id: 5,
      imgsrc: "../img/html.png"
    },
    {
      id: 6,
      imgsrc: "../img/css.png"
    },
    {
      id: 7,
      imgsrc: "../img/sass.png"
    },
    {
      id: 8,
      imgsrc: "../img/bootstrap.png"
    },
    {
      id: 9,
      imgsrc: "../img/js.png"
    },
    {
      id: 10,
      imgsrc: "../img/shopify.png"
    },
  ]
  function diffYearsMonths(date1, date) {
    var diffYears = date.getFullYear() - date1.getFullYear();
    var diffMonths = date.getMonth() - date1.getMonth();

    if (diffMonths < 0) {
      diffYears--;
      diffMonths += 12;
    }

    return { years: diffYears, months: diffMonths };
  }

  // Example usage:
  var date1 = new Date('2023-07-15');
  var diff = diffYearsMonths(date1, date);
  console.log(diff);  // Output: { years: 3, months: 3 }


  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setPosition({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     });
  //   } else {
  //     console.log("Geolocation is not available in your browser.");
  //   }

  //   (async () => {
  //     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.long}&appid=5e21b6c4b19e28df055939fce0b5aac9`)
  //     console.log(res);
  //     const temp = (res.data.main.temp)-273;
  //     setTemp(temp)
  //   })();
  // }, [1]);
  // console.log(position);
  return (
    <>
      {/* portfolio-banner-section start */}
      <section className="banner-section">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <h3>portfolio</h3>
              <span>examples</span>
            </div>
          </div>
        </div>
      </section>
      {/* portfolio-banner-section end */}

      {/* developer-section start */}
      <section className="developer-section">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <h2>Develpoer</h2>
            </div>
            <div className="personal-detail">
              <div className="image">
                <img src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1655638830/img/am-grn-logo_ewow6k.png" alt="" />
              </div>
              <div className="info">
                <h3>frontEnd developer</h3>
                <a href="">mcs</a>
                <i class="fa-solid fa-share-from-square"></i>
                <div className="experiance">
                  <p>June 2023 - Present ·07 mth</p>
                  <span>Arts & Culture</span>
                </div>
              </div>
            </div>
            <div className="techstack">
              <h3>tech stack</h3>
              <div className="image">
                {
                  techImage.map((val) => {
                    const { id, imgsrc } = val;
                    return (
                      <>
                        <a href="" key={id}>
                          <img src={imgsrc} alt="" />
                        </a>
                      </>
                    )
                  })
                }
              </div>
              <p>Arclight Music Was Founded In 2019. Arclight Music was created to give young musicians the opportunities that are lacking in a modern, money hungry music scene to gain experience on stage and the chance to showcase themselves in a way they have not been able to for years. Also to do our part to keep live music alive by promoting young musicians and encouraging the next generation to follow a career in music whether it be performing, studio management, etc.</p>
            </div>
          </div>
        </div>
      </section>
      {/* developer-section end */}
      <hr />

      {/* more-section start */}
      <div className="more-section">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <h2>more</h2>
            </div>
            <div className="main-card flex justify-between align-center">
              <div className="card">
                <div className="content" style={{ backgroundImage: "url(../img/watch.png)" }}>
                  <div className="detail">
                    <div className="date">
                      <span>{days[date.getDay()]}</span>
                      <p>{date.getDate()}</p>
                    </div>
                    <div className="time">
                      <h3>{ctime}</h3>
                    </div>
                    <div className="news">
                      <div className="image">
                        <img src="../img/news.png" alt="" />
                      </div>
                      <p>news</p>
                      {
                        news ? <a href={news.link} target="_blank">{news.description.substring(0, 60)}...</a> : <a>Loading News...</a>
                      }
                    </div>
                  </div>
                </div>
                <div className="tag">
                  <p>API Example (LIVE)</p>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="image">
                    <img src="../img/fan.png" style={{ animation: `rotate ${speed / 2}s linear infinite` }} alt="" />
                  </div>
                  <div className="btn">
                    {
                      fanBtn.map((val) => {
                        const { id, name, speed } = val;
                        return (
                          <a href="" data-custom={speed} onClick={fanSpeed} key={id}>{name}</a>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="card">
                <a href="https://github.com/DarshanAmbaliya" target="_blank">
                  <div className="content">
                    <div className="image">
                      <img src="../img/github.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://www.linkedin.com/in/darshanambaliya-it01" target="_blank">
                  <div className="content">
                    <div className="image">
                      <img src="../img/linkedin.png" alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* more-section end */}
    </>
  )
}

export default Portfolio;
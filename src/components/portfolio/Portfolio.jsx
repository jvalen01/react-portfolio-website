import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/tradingg.jpeg";
import IMG2 from "../../assets/gg.jpeg";
import IMG3 from "../../assets/app1.jpeg";
import IMG4 from "../../assets/tradingIndicator.png";
import IMG5 from "../../assets/port1.png";
import IMG6 from "../../assets/port1.png";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Tradingview Indicators",
    github: "https://github.com/jvalen01/Trading",
    demo: "https://github.com/jvalen01"
  },
  {
    id: 2,
    img: IMG2,
    title: "2D Games",
    github: "https://github.com/jvalen01/2DGames",
    demo: "https://github.com/jvalen01"
    },
  {
    id: 3,
    img: IMG3,
    title: "Messaging App",
    github: "https://github.com/jvalen01/MessagingApp",
    demo: "https://github.com/jvalen01"
  },
  {
    id: 4,
    img: IMG4,
    title: "Stock Data Website",
    github: "https://github.com/jvalen01/stock-data-website",
    demo: "https://github.com/jvalen01"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
        data.map(({id, img, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item_image">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })
        }
        
        
      </div>
    </section>
  );
};

export default Portfolio;

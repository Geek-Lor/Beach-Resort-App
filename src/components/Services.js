import React, { Component } from "react";
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, accusantium?",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, accusantium?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, accusantium?",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, accusantium?",
      },
    ],
  };

  render() {
    const { services } = this.state;
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {services.map((item, index) => (
            <article key={index} className='service'>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;

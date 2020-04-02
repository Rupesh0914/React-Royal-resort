import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'


export default class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             services: [
                 {
                     icon: <FaCocktail />,
                     title: "free cocktails",
                     info: 'Cocktails are provided with just 5 dollars and you can buy it snack along with it'
                 },
                 {
                    icon: <FaHiking />,
                    title: "Endless hiking",
                    info: 'Cocktails are provided with just 5 dollars and you can buy it snack along with it'
                },
                {
                    icon: <FaShuttleVan />,
                    title: "Free shuttle",
                    info: 'Cocktails are provided with just 5 dollars and you can buy it snack along with it'
                },
                {
                    icon: <FaBeer />,
                    title: "Strongest Beer",
                    info: 'Cocktails are provided with just 5 dollars and you can buy it snack along with it'
                }
             ]
        }
    };
    
    render() {
        return (
         <section className="services">
              <Title title='services' />
              <div className="services-center">
                  {this.state.services.map((item, index) => {
                      return (
                <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                  );
                      })}
                 {/* this will map all the items written above as a state as an argument */}
              </div>
              </section>
        );
    }
}
 
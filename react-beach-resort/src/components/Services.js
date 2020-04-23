import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer }
from 'react-icons/fa'

export default class Services extends Component {
    state={
        services: [
            {
            icon:<FaCocktail />,
            title: 'Free Cocktails',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis laudantium rem quasi optio earum error omnis nulla,iste numquam blanditiis, hic consequuntur iure vitae recusandae obcaecati voluptatum molestias dolore!'
            },
            {
            icon:<FaHiking />,
            title: 'Free Hiking',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis laudantium rem quasi optio earum error omnis nulla,iste numquam blanditiis, hic consequuntur iure vitae recusandae obcaecati voluptatum molestias dolore!'
            },
            {
            icon:<FaShuttleVan />,
            title: 'Free Shuttle',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis laudantium rem quasi optio earum error omnis nulla,iste numquam blanditiis, hic consequuntur iure vitae recusandae obcaecati voluptatum molestias dolore!'
            },
            {
            icon:<FaBeer />,
            title: 'Strongest Beer',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis laudantium rem quasi optio earum error omnis nulla,iste numquam blanditiis, hic consequuntur iure vitae recusandae obcaecati voluptatum molestias dolore!'
            },
        ]
    }
  render() {
    return (
      <section className='services'>
        <Title title='Services' />
            <div className="services-center">
                {this.state.services.map((item, index) => {
                    return <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>

                    </article>
                })}
            </div>
        
      </section>
    )
  }
}

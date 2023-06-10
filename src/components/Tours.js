import React from 'react';

import Title from '../utils/Title';
import { availableTour } from '../data/data';

const Tours = () => {
  return (
      <section className="section" id="tours">
      <Title first='featured' second='tours'/>

      <div className="section-center featured-center">
              {
                  availableTour.map(tour => {
                      const {id, date, title, text, location, duration, cost, image} = tour;
                    return (
                        <article key={id} className="tour-card">
                            <div className="tour-img-container">
                                <img src={image} className="tour-img" alt="" />
                                <p className="tour-date">{date}</p>
                            </div>
                            <div className="tour-info">
                                <h4>{title}</h4>
                                <p>
                                    {text}
                                </p>
                                <div className="tour-footer" >
                                <p>
                                    <span><i className="fas fa-map"></i></span> {location}
                                </p>
                                <p>{duration}</p>
                                <p>{cost}</p>
                                </div>
                            </div>
                        </article>
                      )
                  })
            }
      </div>
    </section>
  )
}

export default Tours
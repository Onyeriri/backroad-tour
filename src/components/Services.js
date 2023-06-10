import React from 'react'
import Title from '../utils/Title';

import { activities } from '../data/data'

const Services = () => {
  return (
      <section className="section services" id="services">
      <Title first='our' second='services'/>
      <div className="section-center services-center">

      {activities.map(activity => {
      const { id, icon, title, text } = activity;
      return (
        <article key={id} className="service">
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">
                {text}
            </p>
            </div>
        </article>
            )
        })}
      </div>
    </section>
  )
}

export default Services
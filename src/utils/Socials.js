import React from 'react'

const Socials = ({socialLinks, className, containerClass}) => {
  return (
    <ul className={containerClass}>
                {socialLinks.map(link => {
                      return (
                        <li key={link.id}>
            <a href={link.href} target="_blank" className={className} rel="noreferrer"
              ><i className={link.iconName}></i
            ></a>
          </li>
        )})}
        </ul>
  )
}

export default Socials
import React from 'react'

const Links = ({pageLinks}) => {
  
    return <>
        {pageLinks.map(link => {
        return (<li key={link.id}>
        <a href={link.href} className={link.className}> {link.name} </a>
        </li>)
        })}
        </>
}

export default Links;
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <footer>
        <span>All Rights are Reserved <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>Jyothrling Automobile</span>
        <span>created by Manthan Jadhav</span>
    </footer>
  )
}

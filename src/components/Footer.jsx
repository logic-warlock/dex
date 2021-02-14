import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Footer component
 *
 * @param {Function} submitCallback - callback function that receives pokemon data
 *
 * @returns {Function} Footer Component
 */
export const Footer = () => {
  return (
    <React.Fragment>
      <div className="p-2 border-b border-black shadow bg-red-400 fixed bottom-0 w-full">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/moves">Moves</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </div>
      <div className="pb-20" />
    </React.Fragment>
  )
}

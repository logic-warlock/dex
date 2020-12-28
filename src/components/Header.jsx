import React from 'react'
import PropTypes from 'prop-types'
import { Search } from './Search'

/**
 * Header component
 *
 * @param {Function} submitCallback - callback function that receives pokemon data
 *
 * @returns {Function} Header Component
 */
export const Header = ({ submitCallback }) => {
  return (
    <React.Fragment>
      <div className="flex flex-wrap justify-between items-center p-2 border-b border-black shadow bg-purple-400 fixed w-full">
        <p className="uppercase text-lg">Warlock Dex</p>
        <div>
          <Search submitCallback={submitCallback} />
        </div>
      </div>
      <div className="pt-20" />
    </React.Fragment>
  )
}

Header.propTypes = {
  submitCallback: PropTypes.func,
}

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
      <div className="border-b border-black shadow bg-red-400 w-full fixed">
        <div className="max-w-screen-lg m-auto flex flex-wrap justify-between items-center py-2">
          <p className="uppercase text-lg font-bold">Warlock Dex</p>
          <div>
            <Search submitCallback={submitCallback} />
          </div>
        </div>
      </div>
      <div className="pt-20" />
    </React.Fragment>
  )
}

Header.propTypes = {
  submitCallback: PropTypes.func,
}

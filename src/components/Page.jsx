import React from 'react'
import PropTypes from 'prop-types'

/**
 * Content container for pages. Used to prevent content from going beyond 1024 pixels
 *
 * @param {Function} children - react children
 *
 * @returns {func} React Component
 */
export const Page = ({ children }) => <div className="max-w-screen-lg m-auto">{children}</div>

Page.propTypes = {
  children: PropTypes.func,
}

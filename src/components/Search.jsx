import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getPokemonByName } from '../api'

/**
 * Primary search component
 *
 * @param {Function} submitCallback - callback function that receives pokemon data
 *
 * @returns {Function} Search Component
 */
export const Search = ({ submitCallback }) => {
  const [query, setQuery] = useState('')

  /**
   * Updates the form value
   * @param {object} event - Event object from input event
   */
  const handleChange = (event) => {
    const { value } = event.target

    setQuery(value)
  }

  /**
   * Submits form and query
   *
   * @param {object} event - Event object from form submit
   */
  const handleSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault()

    const newPokemon = await getPokemonByName(query)

    submitCallback(newPokemon)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        className="flex-1 appearance-none border border-transparent w-full py-1 px-2 bg-white text-gray-700 placeholder-gray-400 rounded text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        type="text"
        id="name"
        value={query}
        placeholder="Deoxys"
        onChange={handleChange}
      />
      <button type="submit">
        <i data-feather="search" />
      </button>
    </form>
  )
}

Search.propTypes = {
  submitCallback: PropTypes.func,
}

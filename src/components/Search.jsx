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
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" value={query} placeholder="Deoxys" onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  )
}

Search.propTypes = {
  submitCallback: PropTypes.func,
}

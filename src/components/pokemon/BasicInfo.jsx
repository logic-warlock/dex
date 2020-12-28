import React from 'react'
import PropTypes from 'prop-types'

/**
 * BasicInfo for pokemon
 *
 * @param {string} name - Pokemon name
 * @param {number} id - Pokemon id
 *
 * @returns {Function} React Component
 */
export const BasicInfo = ({ name, id, types }) => {
  /**
   * Formats the pokemon id to be more traditional
   *
   * @param {number} pokeId - the pokemon id
   *
   * @returns {string} Formatted id
   */
  const formatId = (pokeId = 0) => {
    let pokemonId = String(pokeId)

    if (pokemonId.length === 1) {
      pokemonId = `00${pokemonId}`
    } else if (pokemonId.length === 2) {
      pokemonId = `0${pokemonId}`
    }

    return `#${pokemonId}`
  }

  return (
    <div className="p-2 m-2 bg-purple-300 border border-purple-500 shadow rounded">
      <div className="flex items-center justify-between">
        <h3 className="uppercase text-lg">{name || 'Pokemon'}</h3>
        <p>{formatId(id)}</p>
      </div>
      <div className="flex items-center justify-between">
        {!!(types || []).length &&
          types.map(({ type }) => (
            <div key={type?.name} className={`text-white px-5 py-1 rounded bg-${type?.name}`}>
              <p>{type?.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

BasicInfo.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  types: PropTypes.arrayOf({
    type: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
}

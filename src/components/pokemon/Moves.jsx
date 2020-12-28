import React from 'react'
import PropTypes from 'prop-types'

/**
 * Moves for pokemon
 *
 * @returns {Function} React Component
 */
export const Moves = ({ moves }) => {
  console.log({ moves })

  return (
    <div>
      {!!(moves || []).length && (
        <div>
          <h4>Moves!</h4>
          {moves.map(({ move }) => (
            <div key={move?.name}>
              <h5>{move?.name}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

Moves.propTypes = {
  moves: PropTypes.string,
}

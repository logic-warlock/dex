import React from 'react'
import PropTypes from 'prop-types'

const statNames = {
  hp: 'hp',
  attack: 'attack',
  defense: 'defense',
  'special-attack': 'sp.attack',
  'special-defense': 'sp.defense',
  speed: 'speed',
}

/**
 * Shows a chart containing a pokemons Stats
 *
 * @param {array} Stats - Array of pokemon Stats
 *
 * @returns {func} - React Component
 */
export const Stats = ({ stats = [] }) => {
  const maxStat = Math.max(...stats.map((stat) => stat.baseStat))

  return (
    stats.length && (
      <div className="bg-white rounded w-80 p-2 border border-black">
        {stats.map(({ baseStat, stat }) => (
          <div key={stat.name} className="mb-1 flex align-center">
            <div className="h-6 px-2 w-28 bg-gray-200 rounded uppercase font-mono">
              {statNames[stat.name]}
            </div>
            <div className="mx-1 w-40 h-6">
              <div
                className="bg-gray-400 h-6 rounded"
                style={{
                  width: `${Math.round((baseStat / maxStat) * 100)}%`,
                }}
              />
            </div>
            <p className="text-right w-8 font-mono">{baseStat}</p>
          </div>
        ))}
      </div>
    )
  )
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      baseStat: PropTypes.number,
      stat: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  ),
}

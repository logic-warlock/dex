import React from 'react'
import PropTypes from 'prop-types'

/**
 * Pokemon (plural) component
 *
 * @param {object} pokemon - Pokemon data
 *
 * @returns {function} Pokemon Component
 */
export const Pokemon = ({ pokemon }) => {
  console.dir(pokemon)

  const { abilities, height, heldItems, sprites, stats } = pokemon

  return (
    <div>
      <p>Height: {height || 'Unknown'}</p>
      {!!(stats || []).length &&
        stats.map(({ baseStat, effort, stat }) => (
          <div key={`${baseStat}/${effort}/${stat}`}>
            <h5>{stat?.name}</h5>
            <p>{baseStat}</p>
          </div>
        ))}
      {!!(Object.entries(sprites || {}) || []).length && (
        <div>
          <h4>Sprites!</h4>
          {Object.entries(sprites || {}).map(
            ([imgName, imgUrl]) =>
              imgName &&
              imgUrl && (
                <div key={imgName}>
                  <h5>{imgName}</h5>
                  {imgName !== 'other' ? (
                    <img src={imgUrl} alt={imgName} />
                  ) : (
                    Object.entries(imgUrl || {}).map(([otherName, otherUrl]) => (
                      <div>
                        <h6>{otherName}</h6>
                        {Object.entries(otherUrl || {}).map(([whatName, whatUrl]) => (
                          <img src={whatUrl} alt={whatName} />
                        ))}
                      </div>
                    ))
                  )}
                </div>
              ),
          )}
        </div>
      )}
      {!!(heldItems || []).length && (
        <div>
          <h4>Held Items!</h4>
          {heldItems.map(({ item, versionDetails }) => (
            <div key={item?.name}>
              <h5>{item?.name}</h5>
              <p>{versionDetails?.rarity}</p>
              <p>{versionDetails?.name}</p>
            </div>
          ))}
        </div>
      )}
      {!!(abilities || []).length && (
        <div>
          <h4>Abilities!</h4>
          {abilities.map((abilityStat) => (
            <div key={abilityStat?.ability?.name}>
              <h5>
                {abilityStat.ability?.name}
                {abilityStat?.is_hidden && ` (Hidden)`}
              </h5>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.string,
}

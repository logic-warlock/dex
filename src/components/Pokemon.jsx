import React from 'react'
import PropTypes from 'prop-types'
import { Stats } from './pokemon'

/**
 * Pokemon (plural) component
 *
 * @param {object} pokemon - Pokemon data
 *
 * @returns {function} Pokemon Component
 */
export const Pokemon = ({ pokemon }) => {
  console.dir(pokemon)

  const { height, heldItems, sprites, stats, name, id, types } = pokemon

  const officialArt = sprites?.other?.officialArtwork?.frontDefault

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 flex-column">
          <p className="text-3xl font-bold uppercase">#{id}</p>
          <p className="text-4xl font-bold uppercase">{name}</p>
          <div className="flex my-4">
            {(types || []).map(({ type }) => (
              <div
                className={`uppercase bg-white rounded-full px-4 w-${
                  types.length > 1 ? '28' : '56'
                } mr-2 text-center border border-black`}
              >
                {type.name}
              </div>
            ))}
          </div>
          <div className="my-4">
            <Stats stats={stats} />
          </div>
        </div>
        <figure className="w-80 h-80 bg-white shadow-md border border-black rounded justify-self-end">
          <img className="w-full h-full" src={officialArt} alt={`Official Artwork for ${name}`} />
        </figure>
      </div>
      <p>Height: {height || 'Unknown'}</p>
      {!!(Object.entries(sprites || {}) || []).length && (
        <div>
          {Object.entries(sprites || {}).map(
            ([imgName, imgUrl]) =>
              imgName &&
              imgUrl && (
                <div key={imgName}>
                  <h5>{imgName}</h5>
                  {imgName !== 'other' && <img src={imgUrl} alt={imgName} />}
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
    </div>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.string,
}

import axios from 'axios'
import { toCamelcase } from '../util'

const url = 'https://pokeapi.co/api/v2'

/**
 * Fetches pokemon data by name
 *
 * @param {string} name - Pokemon name to search by
 *
 * @returns {object} Pokemon JSON
 */
export const getPokemonByName = async (name) => {
  try {
    const response = await axios(`${url}/pokemon/${name.toLowerCase()}`)

    return toCamelcase(response.data)
  } catch (error) {
    console.error('Unable to get pokemon info.', error)
  }

  return {}
}

/**
 * Fetches pokemon data by id
 * This should mainly used by app links and not by searches
 *
 * @param {string} id - Pokemon id to search by
 *
 * @returns {object} Pokemon JSON
 */
export const getPokemonById = async (id) => {
  try {
    const response = await axios(`${url}/pokemon/${id}`)

    return toCamelcase(response.data)
  } catch (error) {
    console.error('Unable to get pokemon info.', error)
  }

  return {}
}

import { isObject, isArray } from './index'

/**
 * Converts string to camelCase
 *
 * @param {string} s - String to convert
 *
 * @returns {string} string in camelCase syntax
 */
const toCamel = (s) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}

/**
 * Converts object keys to camelCase
 *
 * @param {object} obj - Object to convert
 *
 * @returns {object} Object with camelCase keys
 */
export const toCamelcase = (obj) => {
  if (isObject(obj)) {
    const newObject = {}

    Object.keys(obj).forEach((key) => {
      newObject[toCamel(key)] = toCamelcase(obj[key])
    })

    return newObject
  } else if (isArray(obj)) {
    return obj.map((item) => {
      return toCamelcase(item)
    })
  }

  return obj
}

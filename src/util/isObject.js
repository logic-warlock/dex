import { isArray } from './isArray'

/**
 * For telling if an object is an object
 *
 * @param {any} element - Object in question
 *
 * @returns {boolean} Whether the element is an object or not
 */
export const isObject = (element) =>
  element === Object(element) && !isArray(element) && typeof element !== 'function'

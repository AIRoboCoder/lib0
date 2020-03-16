/**
 * Common functions and function call helpers.
 *
 * @module function
 */

/**
 * Calls all functions in `fs` with args. Only throws after all functions were called.
 *
 * @param {Array<function>} fs
 * @param {Array<any>} args
 */
export const callAll = (fs, args, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args)
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args, i + 1)
    }
  }
}

export const nop = () => {}

/**
 * @template T
 * @param {function():T} f
 * @return {T}
 */
export const apply = f => f()

/**
 * @template A
 *
 * @param {A} a
 * @return {A}
 */
export const id = a => a

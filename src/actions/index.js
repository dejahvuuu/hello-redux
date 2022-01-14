/*
export function setTechnology (text) {
  return {
    type: "SET_TECHNOLOGY",
    tech: text
  }
}
*/

// In ES6, if an object key has the same name as the variable being passed to it,
// you can use the shorthand and simply write the key name, i.e., text instead of text:text.
export const setTechnology = (tech) => ({ type: 'SET_TECHNOLOGY', tech });

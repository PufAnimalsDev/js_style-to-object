'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssStyles = {};

  const cssPropertiesAndValues = sourceString
    .split(';')
    .map(propertyOrValue => propertyOrValue.split(':'))
    .filter(propertyOrValue => propertyOrValue.length === 2);

  for (const propertyOrValue of cssPropertiesAndValues) {
    cssStyles[propertyOrValue[0].trim()] = propertyOrValue[1].trim();
  }

  return cssStyles;
}

module.exports = convertToObject;

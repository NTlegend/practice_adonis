const Antl = use('Antl');
const { ucFirst, getSubstring } = use('App/Helpers/string');

/**
 * Generates a validation failure message using the field and its validation rules
 * in the format 'required|email|string|min:2|max:10'
 *
 * @param field
 * @param rule
 * @returns {{field: *, message: *, validation: *}}
 */

function generateMessage(field, rule) {
  return {
    field,
    validation: getSubstring(rule, null, ':'),
    message: Antl.formatMessage(`validation.${getSubstring(rule, null, ':')}`, {
      field: ucFirst(field),
      value: getSubstring(rule, null, ':') === 'in' ? getSubstring(rule, ':', null) : getSubstring(rule, ':', ',')
    })
  };
}

/**
 * Generates messages from the rule object
 *
 * @param rules
 * @param locale
 */
function createMessagesObj(rules) {
  const messagesObj = {};
  for (const key in rules) {
    if (rules.hasOwnProperty(key)) {
      rules[key].split('|').forEach(rule => {
        const { field, message, validation } = generateMessage(key, rule);
        messagesObj[`${field}.${validation}`] = message;
      });
    }
  }

  return messagesObj;
}

module.exports = createMessagesObj;

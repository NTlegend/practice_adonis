const Antl = use('Antl');
const FileHelper = use('App/Helpers/file');
const Helpers = use('Helpers');
const _ = use('lodash');

/**
 * Generates a validation failure message using the field and its validation rules
 * in the format 'required|email|string|min:2|max:10'
 *
 * @param field
 * @param rule
 * @param locale
 * @param messagesFileName
 * @returns {{field: *, message: *, validation: (*|string)}}
 */

function generateMessage({ field, rule, messagesFileName, locale }) {
  let fileName = 'core';
  if (FileHelper.exists(Helpers.resourcesPath(`locales/${locale}/${messagesFileName}.json`))) {
    fileName = messagesFileName;
  }
  let validation = rule;
  let value = null;
  if (rule.includes(':')) {
    const colonPosition = rule.indexOf(':');
    validation = rule.substring(0, colonPosition);
    value = rule.substring(colonPosition + 1, rule.includes(',') ? rule.indexOf(',') : rule.length);
  }
  return {
    field,
    validation,
    message: Antl.forLocale(locale).formatMessage(`${fileName}.${validation}`, {
      field: _.capitalize(field),
      value
    })
  };
}

module.exports = generateMessage;

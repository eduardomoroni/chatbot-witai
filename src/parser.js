const { parse } = require('./wit');

exports.answer = async message => {
  const parsedMessage = await parse(message);
  return JSON.stringify(parsedMessage);
};

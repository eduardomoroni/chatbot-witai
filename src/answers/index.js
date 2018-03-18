const { errorMessages } = require('./errors');
const { invalidQuestion } = require('./invalids');

const { floor, random } = Math;
const randomAnswer = messages => messages[floor(random() * messages.length)];

module.exports = {
  answerError: () => randomAnswer(errorMessages),
  answerInvalidQuestion: () => randomAnswer(invalidQuestion),
};

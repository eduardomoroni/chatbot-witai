const { answerError, answerInvalidQuestion } = require('../answers');

const INVALID_ENTITY = 'Invalid Entity';

const answerBasedOnEntities = () => {
  throw new Error(INVALID_ENTITY);
};

const answer = parsedMessage => {
  try {
    return answerBasedOnEntities(parsedMessage.entities);
  } catch ({ message }) {
    if (message === INVALID_ENTITY) {
      return answerInvalidQuestion();
    }

    return answerError();
  }
};

module.exports = {
  answer,
  INVALID_ENTITY,
};

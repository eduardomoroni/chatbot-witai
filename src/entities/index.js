const { answerError, answerInvalidQuestion } = require('../answers');

const answer = () => {
  try {
    return answerInvalidQuestion();
  } catch ({ message }) {
    console.error(`Algo aconteceu durante analisar mensagem ${message}`);
    return answerError();
  }
};

module.exports = {
  answer,
};

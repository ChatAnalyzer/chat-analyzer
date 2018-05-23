// returns number of words in one message
export const messageCounter = (counterObject, message) => {

  var wordCount = message.trim().split(/\s+/).length;

  return counterObject = counterObject + wordCount;
}

// returns how many words an average message contains
export const calcWordsPerMessage = ( messages ) => {
  var totalWords = 0;
  let initialCounterObject = {};

  let totalWordCount = messages.reduce(messageCounter, initialCounterObject);

  let averageWordsPerMessage = Math.round( (tlt/messages.length*100) / 100 );

  return [averageWordsPerMessage,totalWordCount];
}

export const calcWordsPerMessage = ( messages ) => {
  var totalWordCount = 0;

  for (var messageIndex = 0; messageIndex < messages.length; messageIndex++) {
    let message = messages[messageIndex];

    totalWordCount = totalWordCount + message.trim().split(/\s+/).length;
  }

  let averageWordsPerMessage = Math.round(totalWordCount/ messages.length*100)/100;

  return [averageWordsPerMessage, totalWordCount];

}

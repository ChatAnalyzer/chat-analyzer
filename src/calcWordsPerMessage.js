export const calcWordsPerMessage = ( messages ) => {
  var totalWordCount = 0;

<<<<<<< HEAD
  for (var messageIndex = 0; messageIndex < messages.length; messageIndex++) {
=======
  for (var messageIndex = 0; messageIndex < messages.length; i++) {
>>>>>>> 87677abdbb319a641c61117ad5f862b0cedbf482
    let message = messages[messageIndex];

    totalWordCount = totalWordCount + message.trim().split(/\s+/).length;
  }

  let averageWordsPerMessage = Math.round(totalWordCount/ messages.length*100)/100;

  return [averageWordsPerMessage, totalWordCount];

}

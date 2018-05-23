export const calcWordsPerMessage = (messages ) => {
  var totalWords = 0;

  for (var i = 0; i < messages.length; i++) {
    totalWords = totalWords + messages[i].trim().split(/\s+/).length;
  }

  let averageWordsPerMessage = Math.round(totalWords/messages.length*100)/100;

  return [averageWordsPerMessage, totalWords];

}

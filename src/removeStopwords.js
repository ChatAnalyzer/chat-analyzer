// SUGGESTIONS: refacture ino shouldDisplay
// and this function take a word and the language, then it returns true or false, and this function should be used wherever you are trying to display the words

import { STOPWORDS } from './stopwords';

const filterWords = (wordCountObject, wordsToFilterOut) => {
  for (var key in wordCountObject) {
    var containsWord = (wordsToFilterOut.indexOf(key) > -1);
    if (containsWord) {
      delete wordCountObject[key];
    }
  }
  return wordCountObject;
}

export const removeStopwords = (wordCountObject, language) => {
  var stopwords = STOPWORDS[language];
  var filteredObject = Object.assign(wordCountObject);
  return filterWords(filteredObject, stopwords)

  // TODO: MOVE HTML
    // // get element
    // div = document.getElementById("wordsByUsage"+i);
    // // remove old content
    // div.innerHTML = "";
    // // add new content
    // if (filteredWords[i].length > 29) {
    //   max = 30;
    // } else {
    //   max = filteredWords[i].length;
    // }
    // var mostUsedHTML ="";
    // for (var j = 0; j < max; j++) {
    //   mostUsedHTML = mostUsedHTML + "<p>" + filteredWords[i][j][0].substring(1) +" - "+ Math.round(filteredWords[i][j][1]/totalWords*1000)/10 + "%</p>";
    // }
    // div.innerHTML = mostUsedHTML;

}

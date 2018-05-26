import {  STOPWORDS } from './constants';

const filterWords = (wordCountObject, wordsToFilterOut) => {
  for (var key in wordCountObject) {
    let containsWord = (wordsToFilterOut.indexOf(key) > -1);
    if (wordCountObject.hasOwnProperty(key) && containsWord) {
      // BUG: ?!? This does not delete the key
      delete wordCountObject.key;
    }
  }
  return wordCountObject;
}

export const removeStopwords = (wordCountObject, language) => {
  var stopwords = STOPWORDS[language];
  return filterWords(wordCountObject, stopwords)

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

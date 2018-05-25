import { STOPWORDS } from './constants';


export const removeStopwords = (words, language) => {

  var Stopwords = STOPWORDS[language];

  var delIndexArray = [];
  var delIndex = 0;

  for (var wordIndex = 0; wordIndex < words.length; wordIndex++) {

    if (Stopwords.indexOf(words[wordIndex]) > -1) {
      delIndexArray[delIndex] = wordIndex;
      delIndex++;
    }
  }

  for (var delIndex = 0; delIndex < delIndexArray.length; delIndex++) {
    words.splice(delIndexArray[delIndex]-delIndex,1);
  }

  return words;

    //
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

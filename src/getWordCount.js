import {messageToArrayOfWords} from './utils';

const countAWordReducer = ( counterObject, word ) => {

  let underscoredWord = "_" + word.toLowerCase();
  let count           = counterObject[ underscoredWord ];
  let currentCount    = count || 0;

  counterObject[ underscoredWord ] = currentCount + 1;

  return counterObject;
};

const messagesReducer = ( counterObject, message ) => {
  return messageToArrayOfWords(message)
    .reduce( countAWordReducer, counterObject );
};

export const getWordsCount = ( messagesArr ) => {
  let initialCounterObject = {};
  return messagesArr.reduce( messagesReducer, initialCounterObject );
};

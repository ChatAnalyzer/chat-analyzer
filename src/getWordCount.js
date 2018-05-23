const WORD_DECIMETER = /[\b\s(?:,| )+]/;

const countAWordReducer = ( counterObject, word ) => {

  let underscoredWord = "_" + word.toLowerCase();
  let count           = counterObject[ underscoredWord ];
  let currentCount    = count || 0;

  counterObject[ underscoredWord ] = currentCount + 1;

  return counterObject;
};

const messagesReducer = ( counterObject, message ) => {
  return message
    .split( WORD_DECIMETER )
    .reduce( countAWordReducer, counterObject );
};

export const getWordsCount = ( messagesArr ) => {
  let initialCounterObject = {};
  return messagesArr.reduce( messagesReducer, initialCounterObject );
};

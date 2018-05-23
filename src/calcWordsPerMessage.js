import { messageToArrayOfWords } from './utils';

const countWords = ( total, message ) => {
  return total + messageToArrayOfWords( message ).length;
};

const getAverage = ( messagesLength, allWordsInAllMessagesCount ) => {
  return Math.round( allWordsInAllMessagesCount / messagesLength * 100 ) / 100;
};

export const calcWordsPerMessage = ( messages ) => {

  let allWordsInAllMessagesCount = messages.reduce( countWords, 0 );
  let average                    = getAverage( messages.length, allWordsInAllMessagesCount );

  return [ average, allWordsInAllMessagesCount ];
};

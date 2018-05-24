import { WORD_DECIMETER } from '../constants';

export const messageToArrayOfWords = ( message ) => {
  return message.trim().split( WORD_DECIMETER );
};

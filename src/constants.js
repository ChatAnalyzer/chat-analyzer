//TODO: fix word delimiter regex
//currently the word delimiter regex is not completely correct, if
//there is a comma followed by a space it counts the space as a word
//which is wrong behavior, also it should clear words from things
//like (dots, question and exclamation marks.. etc)
export const WORD_DECIMETER = /[\b\s(?:,| )+]/;

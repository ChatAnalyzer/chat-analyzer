import { messageToArrayOfWords } from '../utils';

export const tokenizer = function ( content, includeMatches ) {
  let explainedPattern = [

    //optional '[' or LEFT-TO-RIGHT MARK '\u200E'
    '(?:[\\[\u200E])?',

    //date
    '((?:\\d{1,4}[\\/\\-\\.]*){2,3})',

    //separators
    '(?:[,\\s]+)',

    //optional 'um' or similar
    '(?:[^\\s]+\\s)?',

    //time
    '((?:\\d{1,2}:?){2}\\d{1,2})',

    //separators
    '(?:[:\\-\\s\\]]+)',

    //daynight
    '([ap]\\.?\\s?m\\.?)?',

    //separators
    '(?:[:\\s\\-\\]]*)?',

    //name and message
    //this assumes that the name doesn't have ':'
    //which is unlikely, so we need to improve this
    //in the future, maybe asking the user to select
    //usernames prior start the tokenizer
    '([^:]*):\\s?(.+)'
  ].join( '' );


  let re = new RegExp( explainedPattern, 'gi' );

  let data = {
    dates     : [],
    times     : [],
    names     : [],
    messages  : [],
    totalWords: 0
  };

  let matches = [];

  let match;

  while ( match = re.exec( content ) ) {

    includeMatches && matches.push( match );

    //first element is the whole match,
    //fourth element is day night (am/pm)
    //we don't use them for any statistics now,
    //it would be nice for day/night statistics.
    let [ /*all*/, date, time, /*daynight*/, name, message ] = match;

    let messageAsArrayOfWords = messageToArrayOfWords( message );

    data.dates.push( date );
    data.times.push( time );
    data.names.push( name );

    //this saves two more loop in the future
    data.totalWords += messageAsArrayOfWords.length;
    data.messages.push( messageAsArrayOfWords );
  }

  return {
    matches,
    data
  }
};

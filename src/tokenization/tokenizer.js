export const tokenizer = function ( content, includeMatches ) {
  let explainedPattern = [
    '(?:[\\[\u200E])?',
    '((?:\\d{1,4}[\\/\\-\\.]*){2,3})(?:[,\\s]+)',
    '(?:.+?\\s)?((?:\\d{1,2}:?){2}\\d{1,2})',
    '(?:[:\\-\\s\\]]+)',
    '([aAPpMm:\\.\\s]+)?',
    '[\\]\\-\\s]*',
    '([^:]+):\\s?(.+)'
  ].join( '' );

  let re = new RegExp( explainedPattern, 'g' );

  let statistics = {
    dates   : [],
    times   : [],
    names   : [],
    messages: []
  };

  let matches = [];

  let match;

  while ( match = re.exec( content ) ) {
    includeMatches && matches.push( match  );

    let [ , date, time, , name, message ] = match;

    statistics.dates.push( date );
    statistics.times.push( time );
    statistics.names.push( name );
    statistics.messages.push( message );
  }

  return {
    matches,
    statistics
  }
};

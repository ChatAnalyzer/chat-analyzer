export const getWordCount = function getWordCount( messagesArr ) {
  // thanks to https://stackoverflow.com/a/6565353/7151828
  return messagesArr.reduce(function(acc, currentMessage){
    let words = currentMessage.split( /[\b\s(?:,| )+]/ );
    for ( var i = 0; i < words.length; i++ ) {
      acc[ "_" + words[ i ].toLowerCase() ] = (acc[ "_" + words[ i ].toLowerCase() ] || 0) + 1;
    }
    return acc;
  }, {});
};

import { getWordsCount } from './getWordCount';

describe( 'getWordCount', () => {

  it( 'should be function', () => {
    expect( typeof getWordsCount ).toBe( 'function' );
  } );

  it( 'should return count of words in lowercase', () => {
    let mockedMessages = [ 'Message'];
    let expectedResult = {
      '_message': 1,
    };

    let result = getWordsCount( mockedMessages );
    expect( result ).toEqual( expectedResult );

  } );

  it( 'should split words correctly', () => {
    let mockedMessages = [ 'Message, , '];
    let expectedResult = {"_": 4, "_message": 1};

    let result = getWordsCount( mockedMessages );
    expect( result ).toEqual( expectedResult );

  } );

  it( 'should return count of all messages', () => {
    let mockedMessages = [ 'first message', 'second message here', 'and the last one' ];
    let expectedResult = {
      '_first'  : 1,
      '_message': 2,
      '_second' : 1,
      '_here'   : 1,
      '_and'    : 1,
      '_the'    : 1,
      '_last'   : 1,
      '_one'    : 1
    };

    let result = getWordsCount( mockedMessages );
    expect( result ).toEqual( expectedResult );

  } );

} );

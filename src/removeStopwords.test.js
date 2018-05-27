import { removeStopwords } from './removeStopwords';

describe( 'removeStopwords', () => {

  it( 'should be function', () => {
    expect( typeof removeStopwords ).toBe( 'function' );
  } );

  it( 'should remove stopords', () => {
    let mockedWords = { 'i': 1, 'asdasd': 1, "'ll": 1,"'tis":1,"'twas":1};
    let mockedLanguage = 'en';
    let expectedResult = {
      'asdasd': 1
    };

    let result = removeStopwords( mockedWords, mockedLanguage );
    expect( result ).toEqual( expectedResult );

  } );


} );

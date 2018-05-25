import { removeStopwords } from './removeStopwords';

describe( 'removeStopwords', () => {

  it( 'should be function', () => {
    expect( typeof removeStopwords ).toBe( 'function' );
  } );

  it( 'should remove stopords', () => {
    let mockedWords = { 'I': 1, 'asdasd': 1};
    let mockedLanguage = 'en';
    let expectedResult = {
      '_asdasd': 1
    };

    let result = removeStopwords( mockedWords, mockedLanguage );
    expect( result ).toEqual( expectedResult );

  } );


} );

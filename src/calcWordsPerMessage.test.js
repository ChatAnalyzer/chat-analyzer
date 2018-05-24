import { calcWordsPerMessage } from './calcWordsPerMessage';

describe( 'calcWordsPerMessage', () => {

  it( 'should be function', () => {
    expect( typeof calcWordsPerMessage ).toBe( 'function' );
  } );

  it( 'should return an array of length 2', () => {
    let mockedMessages = [ 'This is the first message', 'This is the second message'];

    let result = calcWordsPerMessage( mockedMessages );
    expect( result.length ).toBe( 2 );

  } );

  it( 'should count words and the average correctly', () => {

    let mockedMessages = [ 'This is the first message', 'This is the second message'];
    let expectedResult = [
      5, 10
    ];

    let result = calcWordsPerMessage( mockedMessages );
    expect( result ).toEqual( expectedResult );

  } );


} );

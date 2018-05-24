import { messageToArrayOfWords } from './message';

describe( 'utils>message', () => {
  it( 'should be a function', () => {
    expect( typeof messageToArrayOfWords ).toBe( 'function' );
  } );

  it( 'should convert a message string to an array of words', () => {
    let message       = 'this is a simple message consists of multiple words';
    let expectedArray = [ 'this', 'is', 'a', 'simple', 'message', 'consists', 'of', 'multiple', 'words' ];
    let result        = messageToArrayOfWords( message );

    expect( result ).toEqual( expectedArray );

  } );

  it( 'should trim and convert a message string to an array of words', () => {
    let message       = '   this        ';
    let expectedArray = [ 'this' ];
    let result        = messageToArrayOfWords( message );

    expect( result ).toEqual( expectedArray );

  } );

  it( 'should skip commas', () => {

    let message       = 'Two hundred euros,I think,is sufficient.';
    let expectedArray = [ "Two", "hundred", "euros", "I", "think", "is", "sufficient." ];
    let result        = messageToArrayOfWords( message );

    expect( result ).toEqual( expectedArray );

  } );

} );

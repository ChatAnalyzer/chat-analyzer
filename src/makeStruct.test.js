import { makeStruct } from './makeStruct';

describe( 'makeStruct', () => {

  it( 'should be function', () => {
    expect( typeof makeStruct ).toBe( 'function' );
  } );

  it( 'should return a constructor', () => {
    let mockedInput = "key1 key2 key3";

    let result = makeStruct( mockedInput );
    expect( typeof result ).toBe( 'function' );

  } );

  it( 'should create all keys', () => {
    let mockedInput = "key1 key2 key3";
    let mockedData1  = 1;
    let mockedData2  = "lala";
    let mockedData3  = ["a","a"];

    let Item = makeStruct( mockedInput );
    let result = new Item(mockedData1, mockedData2, mockedData3)
    expect( result.key1 ).toBe( mockedData1 );
    expect( result.key2 ).toBe( mockedData2 );
    expect( result.key3 ).toBe( mockedData3 );
  } );


} );

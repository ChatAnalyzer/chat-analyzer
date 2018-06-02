import { getDistinct } from './getDistinct';

describe( 'getDistinct', () => {
  it( 'should be a function', () => {
    expect( typeof getDistinct ).toBe( 'function' );
  } );

  it( 'should return unique values', () => {
    let values   = [ 'repeated', 'second', 'repeated' ];
    let expected = [ 'repeated', 'second' ];
    let result   = getDistinct( values );

    expect( result ).toEqual( expected );
  } );

} );

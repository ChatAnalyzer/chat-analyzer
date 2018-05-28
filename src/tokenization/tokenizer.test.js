import { usecases } from './mocks';
import { tokenizer } from './tokenizer';
import simplifiedMessages from './mocks/whatsapp.txt';

describe( 'tokenizer', () => {

  it( 'should cover all use cases', () => {
    usecases.forEach( ( [ usecase, expectedResult ] ) => {
      let { matches } = tokenizer( usecase, true );
      let [ result ]  = matches;

      if ( expectedResult ) {
        
        //str.exec returns array-like object which has more
        //properties then the regular array (index, input, groups .. )
        //this is why we wrapped it in [...result]
        expect( [ ...result ] ).toEqual( expectedResult );
      } else {
        expect( result ).toBeFalsy();
      }
    } );
  } );

  it( 'simplified chat', () => {
    let { data, matches } = tokenizer( simplifiedMessages, true );

    expect( data ).toEqual( {
      dates   : [ '6/13/16', '6/13/16', '6/13/16' ],
      times   : [ '10:57', '2:48', '2:49' ],
      names   : [ 'user1', 'user2', 'user2' ],
      messages: [ [ 'Hi' ], [ 'Hey', 'user1', 'how', 'are', 'you' ], [ 'how', 'was', 'your', 'weekend', 'I', 'hope', 'it', 'was', 'sunny', '😍' ] ],
      totalWords: 16
    } );

    //remove regex meta (index, length .. etc)
    let pureMatches = matches.map( m => [ ...m ] );
    expect( pureMatches ).toEqual(
      [
        [ '6/13/16, 10:57 AM - user1: Hi,', '6/13/16', '10:57', 'AM', 'user1', 'Hi,' ],
        [ '6/13/16, 2:48 PM - user2: Hey user1, how are you?', '6/13/16', '2:48', 'PM', 'user2', 'Hey user1, how are you?' ],
        [ '6/13/16, 2:49 PM - user2: how was your weekend? I hope it was sunny! 😍', '6/13/16', '2:49', 'PM', 'user2', 'how was your weekend? I hope it was sunny! 😍' ]
      ]
    )
  } );
} );

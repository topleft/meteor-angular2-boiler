import {Parties} from '../collections/parties';
import {Meteor} from 'meteor/meteor';

export const parties = Meteor.publish('parties', function() {
  return Parties.find();
});

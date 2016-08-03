import {loadParties} from './load-parties.ts';
import {Meteor} from 'meteor/meteor';
// tutorial suggested it but not needed?
import { parties } from './publish.ts';

Meteor.startup(loadParties);

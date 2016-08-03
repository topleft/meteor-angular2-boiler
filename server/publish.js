"use strict";
var parties_1 = require('../collections/parties');
var meteor_1 = require('meteor/meteor');
exports.parties = meteor_1.Meteor.publish('parties', function () {
    return parties_1.Parties.find();
});
//# sourceMappingURL=publish.js.map
var sim = require('sim');
var lists = sim.db.lists;

exports.save = function (offers, callback) {
    var self = this;
    callback = callback || function () {};
    self.user.offers = offers;
    self.user.save(function () {
        callback();
    });
};

exports.getOffers = function (callback) {
    var self = this;
    callback({
        offers: self.user.offers || []
    });
};
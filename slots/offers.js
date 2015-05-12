var sim = require('sim');
var lists = sim.db.lists;
var async = require('async');

exports.getOffers = function (offs, callback) {
    var offers = [];
    async.eachSeries(offs, iterator, done);
    
    function iterator(off, callback) {
        lists.offers.get({
            id: off.id
        }, function (offer) {
            if (!offer) { callback(); return; }
            offers.push(offer);
            callback();
        });
    }
    
    function done() {
        callback(offers);
    }
};
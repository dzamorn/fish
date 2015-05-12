var sim = require('sim');
var lists = sim.db.lists;

exports.addReview = function (review, callback) {
    review.date = new Date();
    review.status = 'Новый';
    lists.reviews.add(review, function (review) {
        callback(review);
    });
};
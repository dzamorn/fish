var async = require('async');

lists.orders.filter({
    user: user.username
}, $next);

> (orders)
context.orders = orders;
async.eachSeries(orders, iterator, $next);

function iterator(order, callback) {
    order.total = 0;
    order.count = 0;
    _.each(order.offers, function (offer) {
        order.total += offer.price * offer.count;
        order.count += offer.count;
    });
    callback();
}

>
$done();
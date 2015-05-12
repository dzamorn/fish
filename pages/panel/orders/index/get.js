var async = require('async');

lists.orders.all($next);

> (orders)
context.orders = orders;
orders.sort(function (a, b) {
    if (a.status === 'Обрабатывается') {
        return -1;
    }
    return 1;
});
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
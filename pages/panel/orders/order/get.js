lists.orders.get({
    _id: url.id
}, $next);

> (order)
context.order = order;
order.total = 0;
_.each(order.offers, function (offer) {
    order.total += offer.price * offer.count;
});
order.count = 0;
_.each(order.offers, function (offer) {
    order.count += offer.count;
});
lists.users.get({
    username: order.user
}, $next);

> (user)
context.u = user;
$done();
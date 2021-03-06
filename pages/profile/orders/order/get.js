lists.orders.get({
    id: +url.id
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
$done();
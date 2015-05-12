lists.orders.get({
    _id: url.id
}, $next);

> (order)
order.remove($next);

>
redirect('/panel/orders/');
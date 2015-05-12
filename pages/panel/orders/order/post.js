lists.orders.get({
    _id: url.id
}, $next);

> (order)
order.status = post.status;
order.save($next);

>
redirect(request.url);
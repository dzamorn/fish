lists.reviews.filter({
    offer: 'none',
    status: 'Опубликован'
}, $next);

> (reviews)
context.reviews = reviews;
$done();
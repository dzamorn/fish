lists.offers.get({
    id: url.id
}, $next);

> (offer)
context.offer = offer;
lists.reviews.filter({
    offer: offer._id + '',
    status: 'Опубликован'
}, $next);

> (reviews)
context.reviews = reviews;
lists.sections.get({
    _id: context.offer.section
}, $next);

> (section)
context.section = section;
$done();
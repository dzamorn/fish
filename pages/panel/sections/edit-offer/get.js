lists.offers.get({
    _id: url.id
}, $next);

> (offer)
context.offer = offer;
lists.sections.get({
    _id: offer.section
}, $next);

> (section)
context.section = section;
$done();
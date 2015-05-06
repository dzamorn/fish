lists.offers.get({
    _id: url.id
}, $next);

> (offer)
context.offer = offer;
offer.remove($next);

>
redirect('/panel/sections/edit-section/' + context.offer.section + '/');
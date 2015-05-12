lists.offers.get({
    _id: url.id
}, $next);

> (offer)
context.offer = offer;
offer.onMain = false;
offer.save($next);

>
redirect('/catalog/offer/' + context.offer.id + '/');
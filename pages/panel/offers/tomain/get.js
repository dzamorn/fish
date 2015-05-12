lists.offers.get({
    _id: url.id
}, $next);

> (offer)
context.offer = offer;
offer.onMain = true;
offer.save($next);

>
redirect('/catalog/offer/' + context.offer.id + '/');
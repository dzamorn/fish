lists.reviews.get({
    _id: url.id
}, $next);

> (review)
review.remove($next);

>
redirect('/panel/reviews/');
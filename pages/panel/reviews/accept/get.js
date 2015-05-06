lists.reviews.get({
    _id: url.id
}, $next);

> (review)
review.status = 'Опубликован';
review.save($next);

>
redirect('/panel/reviews/');
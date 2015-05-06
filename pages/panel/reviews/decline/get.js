lists.reviews.get({
    _id: url.id
}, $next);

> (review)
review.status = 'Отклонен';
review.save($next);

>
redirect('/panel/reviews/');
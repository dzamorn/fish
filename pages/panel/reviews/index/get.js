lists.reviews.all($next);

> (reviews)
context.reviews = reviews;
context.reviews.sort(function (a, b) {
    if (a.status > b.status) { return 1; }
    else { return -1; }
});
$done();
lists.news.get({
    _id: url.id
}, $next);

> (item)
context.item = item;
$done();
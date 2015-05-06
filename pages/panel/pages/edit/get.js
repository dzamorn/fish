lists.pages.get({
    _id: url.id
}, $next);

> (page)
context.page = page;
$done();
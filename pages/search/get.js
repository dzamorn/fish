
context.search = get.search;
lists.offers.page({
    search: get.search,
    searchBy: 'title',
    sortBy: get.sort || 'price',
    limit: 20,
    page: get.page || 1
}, $next);

> (page)
context.page = page;
$done();
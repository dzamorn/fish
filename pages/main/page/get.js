lists.pages.get({
    url: request.url
}, $next);

> (page)
if (!page) {
    error404();
    return;
}
context.page = page;
$done();
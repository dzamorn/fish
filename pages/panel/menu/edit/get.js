lists.menu.get({
    _id: url.id
}, $next);

> (item)
if (!item) {
    error404();
    return;
}
context.item = item;
$done();
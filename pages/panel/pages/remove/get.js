lists.pages.get({
    _id: url.id
}, $next);

> (page)
page.remove($next);

>
redirect('/panel/pages/');
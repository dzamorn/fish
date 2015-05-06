lists.pages.get({
    _id: url.id
}, $next);

> (page)
page.title = post.title;
page.url = post.url;
page.content = post.content;
page.save($next);

>
redirect(request.url);
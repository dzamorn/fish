lists.news.get({
    _id: url.id
}, $next);

> (item)
item.remove($next);

>
redirect('/panel/news/');
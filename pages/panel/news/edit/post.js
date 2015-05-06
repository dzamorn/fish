lists.news.get({
    _id: url.id
}, $next);

> (item)
item.title = post.title;
item.description = post.description;
item.content = post.content;
item.save($next);

>
redirect('/panel/news/' + url.id + '/edit/');
lists.menu.get({
    _id: url.id
}, $next);

> (item)
item.title = post.title;
item.url = post.url;
item.priority = post.priority;
item.save($next);

>
redirect('/panel/menu/' + url.id + '/edit/');
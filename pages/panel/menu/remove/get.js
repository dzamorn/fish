lists.menu.get({
    _id: url.id
}, $next);

> (item)
item.remove($next);

>
redirect('/panel/menu/');
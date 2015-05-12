lists.users.get({
    _id: url.id
}, $next);

> (user)
user.remove($next);

>
redirect('/panel/users/');
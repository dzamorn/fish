lists.users.filter({
    isAuth: true
}, $next);

> (users)
context.users = users;
$done();
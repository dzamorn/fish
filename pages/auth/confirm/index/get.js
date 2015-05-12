lists.users.get({
    _id: get.key
}, $next);

> (user)
if (!user) {
    redirect('/');
    return;
}
context.user = user;
user.confirmed = true;
user.save($next);

>
redirect('/auth/confirm/success/');
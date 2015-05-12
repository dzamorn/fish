lists.users.get({
    _id: url.id
}, $next);

> (u)
if (typeof post.password === 'string' && post.password.length > 0) {
    u.setPassword(post.password);
}
u.email = post.email;
u.isStaff = post.isStaff === 'on';
u.isAdmin = post.isAdmin === 'on';
u.country = post.country;
u.region = post.region;
u.index = post.index;
u.town = post.town;
u.address = post.address;
u.save($next);

>
redirect(request.url);
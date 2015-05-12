var redirectUrl = get.redirect;
sim.auth.login({
    response: response,
    username: post.username,
    password: post.password
}, $next);

> (user)
if (!user) {
    redirect('/auth/login/?error=1');
    return;
}
if (!user.confirmed) {
    sim.auth.logout(response, function () {
        redirect('/auth/confirm/error/');
    });
    return;
}
if (redirectUrl) {
    redirect(redirectUrl);
    return;
}
redirect('/auth-redirect/');
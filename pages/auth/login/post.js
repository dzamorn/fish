var redirectUrl = get.redirect;
context.oldUser = user;
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
user.offers = user.offers || [];
_.each(context.oldUser.offers || [], function (oldOffer) {
    var added = false;
    _.each(user.offers, function (offer) {
        if (+offer.id === +oldOffer.id) {
            added = true;
            offer.count += oldOffer.count;
        }
    });
    if (!added) {
        user.offers.push(oldOffer);
    }
});
user.save($next);

>
context.oldUser.offers = [];
context.oldUser.save($next);

>
if (redirectUrl) {
    redirect(redirectUrl);
    return;
}
redirect('/auth-redirect/');

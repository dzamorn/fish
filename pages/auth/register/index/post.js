var util = require('util');
var async = require('async');
sim.auth.register({
    username: post.username,
    email: post.email,
    password1: post.password1,
    password2: post.password2
}, $next);

> (errors, newUser)
if (errors.length > 0) {
    redirect(util.format('/auth/register/?username=%s&email=%s&errors=%s', post.username, post.email, errors.join(',')));
    return;
}
context.user = user;
context.newUser = newUser;
newUser.offers = user.offers || [];
user.offers = [];
newUser.save($next);

>
context.user.save($next);

>
var user = context.newUser;
var params = {
    server: 'smtp.mail.ru',
    username: 'noreply@ribov.ru',
    password: 'qcZjaq',
    from: 'Интернет-магазин морепродуктов РЫБОВЪ <noreply@ribov.ru>',
    to: user.email,
    subject: 'Подтверждение e-mail',
    content: 'Для подтверждения перейдите по следующей ссылке: http://ribov.ru/auth/confirm/?key=' + user._id
};
sim.email.sendText(params, function () {
    console.log(arguments);
});
redirect('/auth/register/confirm/');
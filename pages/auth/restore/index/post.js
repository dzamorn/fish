lists.users.get({
    email: post.email
}, $next);

> (user)
if (!user) {
    redirect('/auth/restore/?error=true');
    return;
}
context.user = user;
var password = user.password.slice(0, 10);
context.password = password;
user.setPassword(password);
user.save($next);

>
var user = context.user;
var params = {
    server: 'smtp.mail.ru',
    username: 'noreply@ribov.ru',
    password: 'qcZjaq',
    from: 'Интернет-магазин морепродуктов РЫБОВЪ <noreply@ribov.ru>',
    to: user.email,
    subject: 'Временный пароль',
    content: 'Ваш временный пароль: ' + context.password
};
sim.email.sendText(params, function () {
    console.log(arguments);
});
redirect('/auth/restore/sended/');
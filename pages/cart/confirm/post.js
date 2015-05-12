_.each(user.offers, function (offer) {
    delete offer.$$hashKey;
});
lists.orders.add({
    id: { $ai: true },
    status: 'Обрабатывается',
    date: new Date(),
    user: user.username,
    offers: user.offers
}, $next);

> (order)
context.order = order;
user.offers = [];
user.save($next);

>
lists.options.get({
    root: true
}, $next);

> (options)
var params = {
    server: 'smtp.mail.ru',
    username: 'noreply@ribov.ru',
    password: 'qcZjaq',
    from: 'Интернет-магазин морепродуктов РЫБОВЪ <noreply@ribov.ru>',
    to: options.email,
    subject: 'Новый заказ #' + context.order.id,
    content: 'Поступил новый заказ: http://ribov.ru/auth/login/?redirect=/panel/orders/' + context.order._id + '/'
};
sim.email.sendText(params, function () {
    console.log(arguments);
});
redirect('/cart/success/?order=' + context.order.id);
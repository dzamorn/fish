var _ = require('underscore');
var sim = require('sim');

var lists = sim.db.getLists();

exports['main/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/main/index';
		var async = require('async');
context.custom = [];
context.sections = [];
lists.options.get({
    root: true
}, __gj__step2);

function __gj__step2(options) {
    context.options = options;
    if (!options.showCustom) {
        __gj__step3();
        return;
    }
    lists.offers.filter({
        onMain: true
    }, function (offers) {
        offers.sort(function () {
            var rand = Math.random();
            if (rand > 0.5) {
                return 1;
            }
            else {
                return -1;
            }
        });
        context.custom = offers;
        __gj__step3();
    });
}
function __gj__step3() {
    var sections = [];
    if (!context.options.showRandom) {
        __gj__step4();
        return;
    }
    lists.sections.all(function (secs) {
        sections = secs;
        async.eachSeries(sections, iterator, done);
    });
    function iterator(section, callback) {
        lists.offers.filter({
            section: section._id + ''
        }, function (offers) {
            section.offers = offers;
            callback();
        });
    }
    function done() {
        sections.sort(function (a, b) {
            var rand = Math.random();
            if (rand > 0.5) {
                return 1;
            }
            else {
                return -1;
            }
        });
        sections = sections.slice(0, +context.options.randomSectionsCount || 3);
        _.each(sections, function (section) {
            section.offers.sort(function () {
                var rand = Math.random();
                if (rand > 0.5) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
            section.offers = section.offers.slice(0, +context.options.randomOffersCount || 4);
        });
        sections.sort(function (a, b) {
            if (a.offers.length < b.offers.length) {
                return 1;
            } else {
                return -1;
            }
        });
        context.sections = sections;
        __gj__step4();
    }
}
function __gj__step4() {
    __gj__callback();
}
	},
};
exports['main/auth-redirect'] = {
};
exports['reviews'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/reviews';
		lists.reviews.filter({
    offer: 'none',
    status: 'Опубликован'
}, __gj__step2);

function __gj__step2(reviews) {
    context.reviews = reviews;
    __gj__callback();
}
	},
};
exports['search'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/search';
		context.search = get.search;
lists.offers.page({
    search: get.search,
    searchBy: 'title',
    sortBy: get.sort || 'price',
    limit: 20,
    page: get.page || 1
}, __gj__step2);

function __gj__step2(page) {
    context.page = page;
    __gj__callback();
}
	},
};
exports['auth/login'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/auth/login';
		context.get = get;
var url = get.redirect || '/';
if (user.isAuth) {
    redirect(url);
    return;
}
__gj__callback();
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/auth/login';
		var redirectUrl = get.redirect;
context.oldUser = user;
sim.auth.login({
    response: response,
    username: post.username,
    password: post.password
}, __gj__step2);

function __gj__step2(user) {
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
    user.save(__gj__step3);
}
function __gj__step3() {
    context.oldUser.offers = [];
    context.oldUser.save(__gj__step4);
}
function __gj__step4() {
    if (redirectUrl) {
        redirect(redirectUrl);
        return;
    }
    redirect('/auth-redirect/');
}
	},
};
exports['auth/logout'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/auth/logout';
		sim.auth.logout(response, __gj__step2);

function __gj__step2() {
    redirect('/');
}
	},
};
exports['auth/register/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/auth/register/index';
		context.get = get;
context.errors = [];
_.each(get.errors.split(','), function (code) {
    var message = sim.auth.errorsDescription[code];
    context.errors.push(message);
});
__gj__callback();
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/auth/register/index';
		var util = require('util');
var async = require('async');
sim.auth.register({
    username: post.username,
    email: post.email,
    password1: post.password1,
    password2: post.password2
}, __gj__step2);

function __gj__step2(errors, newUser) {
    if (errors.length > 0) {
        redirect(util.format('/auth/register/?username=%s&email=%s&errors=%s', post.username, post.email, errors.join(',')));
        return;
    }
    context.user = user;
    context.newUser = newUser;
    newUser.offers = user.offers || [];
    user.offers = [];
    newUser.save(__gj__step3);
}
function __gj__step3() {
    context.user.save(__gj__step4);
}
function __gj__step4() {
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
}
	},
};
exports['auth/register/success'] = {
};
exports['auth/register/confirm'] = {
};
exports['auth/confirm/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/auth/confirm/index';
		lists.users.get({
    _id: get.key
}, __gj__step2);

function __gj__step2(user) {
    if (!user) {
        redirect('/');
        return;
    }
    context.user = user;
    user.confirmed = true;
    user.save(__gj__step3);
}
function __gj__step3() {
    redirect('/auth/confirm/success/');
}
	},
};
exports['auth/confirm/error'] = {
};
exports['auth/confirm/success'] = {
};
exports['auth/restore/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/auth/restore/index';
		context.get = get;
__gj__callback();
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/auth/restore/index';
		lists.users.get({
    email: post.email
}, __gj__step2);

function __gj__step2(user) {
    if (!user) {
        redirect('/auth/restore/?error=true');
        return;
    }
    context.user = user;
    var password = user.password.slice(0, 10);
    context.password = password;
    user.setPassword(password);
    user.save(__gj__step3);
}
function __gj__step3() {
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
}
	},
};
exports['auth/restore/sended'] = {
};
exports['restore/index'] = {
};
exports['restore/sended'] = {
};
exports['restore/fail'] = {
};
exports['restore/success'] = {
};
exports['catalog/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/catalog/index';
		lists.sections.filter({
    parent: 'none'
}, __gj__step2);

function __gj__step2(sections) {
    context.sections = sections;
    __gj__callback();
}
	},
};
exports['catalog/section'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/catalog/section';
		lists.sections.get({
    id: url.id
}, __gj__step2);

function __gj__step2(section) {
    context.section = section;
    lists.sections.filter({
        parent: section._id + ''
    }, __gj__step3);
}
function __gj__step3(sections) {
    context.section.children = sections;
    lists.offers.filter({
        section: context.section._id + ''
    }, __gj__step4);
}
function __gj__step4(offers) {
    context.section.offers = offers;
    __gj__callback();
}
	},
};
exports['catalog/offer'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/catalog/offer';
		lists.offers.get({
    id: url.id
}, __gj__step2);

function __gj__step2(offer) {
    context.offer = offer;
    lists.reviews.filter({
        offer: offer._id + '',
        status: 'Опубликован'
    }, __gj__step3);
}
function __gj__step3(reviews) {
    context.reviews = reviews;
    lists.sections.get({
        _id: context.offer.section
    }, __gj__step4);
}
function __gj__step4(section) {
    context.section = section;
    __gj__callback();
}
	},
};
exports['cart/index'] = {
};
exports['cart/contacts'] = {
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/cart/contacts';
		user.fullName = post.fullName;
user.email = post.email;
user.phone = post.phone;
user.index = post.index;
user.country = post.country;
user.region = post.region;
user.town = post.town;
user.address = post.address;
user.save(__gj__step2);

function __gj__step2(user) {
    redirect('/cart/confirm/');
}
	},
};
exports['cart/confirm'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/cart/confirm';
		__gj__callback();
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/cart/confirm';
		_.each(user.offers, function (offer) {
    delete offer.$$hashKey;
});
lists.orders.add({
    id: {
        $ai: true
    },
    status: 'Обрабатывается',
    date: new Date(),
    user: user.username,
    offers: user.offers
}, __gj__step2);

function __gj__step2(order) {
    context.order = order;
    user.offers = [];
    user.save(__gj__step3);
}
function __gj__step3() {
    lists.options.get({
        root: true
    }, __gj__step4);
}
function __gj__step4(options) {
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
}
	},
};
exports['cart/success'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/cart/success';
		lists.orders.get({
    id: +get.order
}, __gj__step2);

function __gj__step2(order) {
    context.order = order;
    order.total = 0;
    _.each(order.offers, function (offer) {
        order.total += offer.price * offer.count;
    });
    order.count = 0;
    _.each(order.offers, function (offer) {
        order.count += offer.count;
    });
    __gj__callback();
}
	},
};
exports['profile/index'] = {
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/profile/index';
		user.fullName = post.fullName;
user.email = post.email;
user.phone = post.phone;
user.index = post.index;
user.country = post.country;
user.region = post.region;
user.town = post.town;
user.address = post.address;
user.save(__gj__step2);

function __gj__step2(user) {
    redirect(request.url);
}
	},
};
exports['profile/personal'] = {
};
exports['profile/password'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/profile/password';
		context.error = ['Неверно указан текущий пароль.', 'Введенный пароль слишком короткий.', 'Введенные пароли не совпадают.'][+get.error - 1];
context.success = get.success === 'true';
__gj__callback();
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/profile/password';
		if (!user.checkPassword(post.currentPassword)) {
    redirect('/profile/password/?error=1');
    return;
}
if (post.password1.length < 3) {
    redirect('/profile/password/?error=2');
    return;
}
if (post.password1 !== post.password2) {
    redirect('/profile/password/?error=3');
    return;
}
user.setPassword(post.password1);
user.save(__gj__step2);

function __gj__step2() {
    redirect('/profile/password/?success=true');
}
	},
};
exports['profile/orders'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/profile/orders';
		var async = require('async');
lists.orders.filter({
    user: user.username
}, __gj__step2);

function __gj__step2(orders) {
    context.orders = orders;
    async.eachSeries(orders, iterator, __gj__step3);
    function iterator(order, callback) {
        order.total = 0;
        order.count = 0;
        _.each(order.offers, function (offer) {
            order.total += offer.price * offer.count;
            order.count += offer.count;
        });
        callback();
    }
}
function __gj__step3() {
    __gj__callback();
}
	},
};
exports['profile/orders/order'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/profile/orders/order';
		lists.orders.get({
    id: +url.id
}, __gj__step2);

function __gj__step2(order) {
    context.order = order;
    order.total = 0;
    _.each(order.offers, function (offer) {
        order.total += offer.price * offer.count;
    });
    order.count = 0;
    _.each(order.offers, function (offer) {
        order.count += offer.count;
    });
    __gj__callback();
}
	},
};
exports['panel/index'] = {
};
exports['panel/options'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/options';
		lists.options.get({
    root: true
}, __gj__step2);

function __gj__step2(options) {
    context.options = options;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/options';
		lists.options.get({
    root: true
}, __gj__step2);

function __gj__step2(options) {
    options.email = post.email;
    options.phone = post.phone;
    options.showCustom = post.showCustom === 'on';
    options.showRandom = post.showRandom === 'on';
    options.randomSectionsCount = +post.randomSectionsCount;
    options.randomOffersCount = +post.randomOffersCount;
    options.save(__gj__step3);
}
function __gj__step3() {
    redirect(request.url);
}
	},
};
exports['panel/users/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/users/index';
		lists.users.filter({
    isAuth: true
}, __gj__step2);

function __gj__step2(users) {
    context.users = users;
    __gj__callback();
}
	},
};
exports['panel/users/user'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/users/user';
		lists.users.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(u) {
    context.u = u;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/users/user';
		lists.users.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(u) {
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
    u.save(__gj__step3);
}
function __gj__step3() {
    redirect(request.url);
}
	},
};
exports['panel/users/remove'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/users/remove';
		lists.users.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(user) {
    user.remove(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/users/');
}
	},
};
exports['panel/menu/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/menu/index';
		lists.menu.all(__gj__step2);

function __gj__step2(menu) {
    context.menu = menu;
    __gj__callback();
}
	},
};
exports['panel/menu/add'] = {
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/menu/add';
		lists.menu.add({
    title: post.title,
    url: post.url,
    priority: post.priority
}, __gj__step2);

function __gj__step2() {
    redirect('/panel/menu/');
}
	},
};
exports['panel/menu/remove'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/menu/remove';
		lists.menu.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    item.remove(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/menu/');
}
	},
};
exports['panel/menu/edit'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/menu/edit';
		lists.menu.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    if (!item) {
        error404();
        return;
    }
    context.item = item;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/menu/edit';
		lists.menu.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    item.title = post.title;
    item.url = post.url;
    item.priority = post.priority;
    item.save(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/menu/' + url.id + '/edit/');
}
	},
};
exports['panel/second/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/second/index';
		lists.second.all(__gj__step2);

function __gj__step2(menu) {
    context.menu = menu;
    __gj__callback();
}
	},
};
exports['panel/second/add'] = {
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/second/add';
		lists.second.add({
    title: post.title,
    url: post.url,
    priority: post.priority
}, __gj__step2);

function __gj__step2() {
    redirect('/panel/second/');
}
	},
};
exports['panel/second/remove'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/second/remove';
		lists.second.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    item.remove(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/second/');
}
	},
};
exports['panel/second/edit'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/second/edit';
		lists.second.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    if (!item) {
        error404();
        return;
    }
    context.item = item;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/second/edit';
		lists.second.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    item.title = post.title;
    item.url = post.url;
    item.priority = post.priority;
    item.save(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/second/' + url.id + '/edit/');
}
	},
};
exports['panel/orders/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/orders/index';
		var async = require('async');
lists.orders.all(__gj__step2);

function __gj__step2(orders) {
    context.orders = orders;
    orders.sort(function (a, b) {
        if (a.status === 'Обрабатывается') {
            return -1;
        }
        return 1;
    });
    async.eachSeries(orders, iterator, __gj__step3);
    function iterator(order, callback) {
        order.total = 0;
        order.count = 0;
        _.each(order.offers, function (offer) {
            order.total += offer.price * offer.count;
            order.count += offer.count;
        });
        callback();
    }
}
function __gj__step3() {
    __gj__callback();
}
	},
};
exports['panel/orders/order'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/orders/order';
		lists.orders.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(order) {
    context.order = order;
    order.total = 0;
    _.each(order.offers, function (offer) {
        order.total += offer.price * offer.count;
    });
    order.count = 0;
    _.each(order.offers, function (offer) {
        order.count += offer.count;
    });
    lists.users.get({
        username: order.user
    }, __gj__step3);
}
function __gj__step3(user) {
    context.u = user;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/orders/order';
		lists.orders.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(order) {
    order.status = post.status;
    order.save(__gj__step3);
}
function __gj__step3() {
    redirect(request.url);
}
	},
};
exports['panel/orders/remove'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/orders/remove';
		lists.orders.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(order) {
    order.remove(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/orders/');
}
	},
};
exports['panel/news/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/news/index';
		lists.news.all(__gj__step2);

function __gj__step2(news) {
    context.news = news;
    __gj__callback();
}
	},
};
exports['panel/news/add'] = {
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/news/add';
		lists.news.add({
    title: post.title,
    description: post.description,
    content: post.content,
    date: new Date()
}, __gj__step2);

function __gj__step2(item) {
    redirect('/panel/news/');
}
	},
};
exports['panel/news/remove'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/news/remove';
		lists.news.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    item.remove(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/news/');
}
	},
};
exports['panel/news/edit'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/news/edit';
		lists.news.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    context.item = item;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/news/edit';
		lists.news.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(item) {
    item.title = post.title;
    item.description = post.description;
    item.content = post.content;
    item.save(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/news/' + url.id + '/edit/');
}
	},
};
exports['panel/sections/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/index';
		lists.sections.filter({
    parent: 'none'
}, __gj__step2);

function __gj__step2(sections) {
    context.sections = sections;
    __gj__callback();
}
	},
};
exports['panel/sections/add-section'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/add-section';
		lists.sections.get({
    _id: url.parentId
}, __gj__step2);

function __gj__step2(parent) {
    context.parent = parent;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/add-section';
		var fs = require('fs');
lists.sections.add({
    id: {
        $ai: true
    },
    parent: url.parentId,
    title: post.title
}, __gj__step2);

function __gj__step2(section) {
    if (post.files.image && post.files.image.exists) {
        fs.writeFileSync(__root + '/static/img/sections/' + section.id + '.jpg', fs.readFileSync(post.files.image.path));
    }
    if (url.parentId == 'none') {
        redirect('/panel/sections/');
        return;
    }
    redirect('/panel/sections/edit-section/' + url.parentId + '/');
}
	},
};
exports['panel/sections/edit-section'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/edit-section';
		lists.sections.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(section) {
    context.section = section;
    lists.sections.get({
        _id: section.parent
    }, __gj__step3);
}
function __gj__step3(parent) {
    context.parent = parent;
    lists.sections.filter({
        parent: context.section._id + ''
    }, __gj__step4);
}
function __gj__step4(subsections) {
    context.subsections = subsections;
    lists.offers.filter({
        section: context.section._id + ''
    }, __gj__step5);
}
function __gj__step5(offers) {
    context.offers = offers;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/edit-section';
		var fs = require('fs');
lists.sections.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(section) {
    section.title = post.title;
    if (post.files.image && post.files.image.exists) {
        fs.writeFileSync(__root + '/static/img/sections/' + section.id + '.jpg', fs.readFileSync(post.files.image.path));
    }
    section.save(__gj__step3);
}
function __gj__step3() {
    redirect(request.url);
}
	},
};
exports['panel/sections/add-offer'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/add-offer';
		lists.sections.get({
    _id: url.sectionId
}, __gj__step2);

function __gj__step2(section) {
    context.section = section;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/add-offer';
		var fs = require('fs');
lists.offers.add({
    id: {
        $ai: true
    },
    title: post.title,
    price: +post.price,
    description: post.description,
    unit: post.unit,
    content: post.content,
    section: url.sectionId
}, __gj__step2);

function __gj__step2(offer) {
    if (post.files.image && post.files.image.exists) {
        fs.writeFileSync(__root + '/static/img/offers/' + offer.id + '.jpg', fs.readFileSync(post.files.image.path));
    }
    redirect('/panel/sections/edit-section/' + url.sectionId + '/');
}
	},
};
exports['panel/sections/edit-offer'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/edit-offer';
		lists.offers.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(offer) {
    context.offer = offer;
    lists.sections.get({
        _id: offer.section
    }, __gj__step3);
}
function __gj__step3(section) {
    context.section = section;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/edit-offer';
		var fs = require('fs');
lists.offers.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(offer) {
    offer.title = post.title;
    offer.price = post.price;
    offer.unit = post.unit;
    offer.description = post.description;
    offer.content = post.content;
    if (post.files.image && post.files.image.exists) {
        fs.writeFileSync(__root + '/static/img/offers/' + offer.id + '.jpg', fs.readFileSync(post.files.image.path));
    }
    offer.save(__gj__step3);
}
function __gj__step3() {
    redirect(request.url);
}
	},
};
exports['panel/sections/remove-section'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/remove-section';
		lists.sections.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(section) {
    context.section = section;
    section.remove(__gj__step3);
}
function __gj__step3() {
    if (context.section.parent === 'none') {
        redirect('/panel/sections/');
        return;
    }
    redirect('/panel/sections/edit-section/' + context.section.parent + '/');
}
	},
};
exports['panel/sections/remove-offer'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/sections/remove-offer';
		lists.offers.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(offer) {
    context.offer = offer;
    offer.remove(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/sections/edit-section/' + context.offer.section + '/');
}
	},
};
exports['panel/pages/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/pages/index';
		lists.pages.all(__gj__step2);

function __gj__step2(pages) {
    context.pages = pages;
    __gj__callback();
}
	},
};
exports['panel/pages/add'] = {
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/pages/add';
		lists.pages.add({
    title: post.title,
    url: post.url,
    content: post.content
}, __gj__step2);

function __gj__step2() {
    redirect('/panel/pages/');
}
	},
};
exports['panel/pages/remove'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/pages/remove';
		lists.pages.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(page) {
    page.remove(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/pages/');
}
	},
};
exports['panel/pages/edit'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/pages/edit';
		lists.pages.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(page) {
    context.page = page;
    __gj__callback();
}
	},
	post: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/pages/edit';
		lists.pages.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(page) {
    page.title = post.title;
    page.url = post.url;
    page.content = post.content;
    page.save(__gj__step3);
}
function __gj__step3() {
    redirect(request.url);
}
	},
};
exports['panel/reviews/index'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/reviews/index';
		lists.reviews.all(__gj__step2);

function __gj__step2(reviews) {
    context.reviews = reviews;
    context.reviews.sort(function (a, b) {
        if (a.status > b.status) {
            return 1;
        }
        else {
            return -1;
        }
    });
    __gj__callback();
}
	},
};
exports['panel/reviews/accept'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/reviews/accept';
		lists.reviews.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(review) {
    review.status = 'Опубликован';
    review.save(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/reviews/');
}
	},
};
exports['panel/reviews/decline'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/reviews/decline';
		lists.reviews.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(review) {
    review.status = 'Отклонен';
    review.save(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/reviews/');
}
	},
};
exports['panel/reviews/remove'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/reviews/remove';
		lists.reviews.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(review) {
    review.remove(__gj__step3);
}
function __gj__step3() {
    redirect('/panel/reviews/');
}
	},
};
exports['panel/offers/tomain'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/offers/tomain';
		lists.offers.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(offer) {
    context.offer = offer;
    offer.onMain = true;
    offer.save(__gj__step3);
}
function __gj__step3() {
    redirect('/catalog/offer/' + context.offer.id + '/');
}
	},
};
exports['panel/offers/frommain'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/panel/offers/frommain';
		lists.offers.get({
    _id: url.id
}, __gj__step2);

function __gj__step2(offer) {
    context.offer = offer;
    offer.onMain = false;
    offer.save(__gj__step3);
}
function __gj__step3() {
    redirect('/catalog/offer/' + context.offer.id + '/');
}
	},
};
exports['main/page'] = {
	get: function (options, __gj__callback) {
		var request = options.request,
			response = options.response,
			user = options.user,
			context = options.context,
			url = options.url,
			get = options.get,
			post = options.post,
			redirect = options.redirect,
			error404 = options.error404,
			error500 = options.error500,
			__root = '/home/teu/projects/fish',
			__dirname = '/home/teu/projects/fish/pages/main/page';
		lists.pages.get({
    url: request.url
}, __gj__step2);

function __gj__step2(page) {
    if (!page) {
        error404();
        return;
    }
    context.page = page;
    __gj__callback();
}
	},
};

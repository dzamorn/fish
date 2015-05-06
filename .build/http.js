var _ = require('underscore');
var sim = require('sim');

var lists = sim.db.getLists();

exports['main/index'] = {
};
exports['auth/login'] = {
};
exports['auth/register/index'] = {
};
exports['auth/register/success'] = {
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
		context.section = {
    title: 'Рыба',
    children: [{
        id: 9,
        title: 'Рыба на льду'
    },
    {
        id: 9,
        title: 'Рыба горячего копчения'
    },
    {
        id: 9,
        title: 'Рыба холодного копчения'
    },
    {
        id: 9,
        title: 'Рыба слабосоленая'
    },
    {
        id: 9,
        title: 'Рыба свежемороженая'
    }],
    offers: [{
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    },
    {
        id: 11,
        title: 'Вобла вяленая очищеная в/у 1/100',
        price: 130,
        description: '88 кКал',
        unit: '1 шт',
        content: 'Вобла вяленая очищеная в/у 1/100',
        section: '554985912230a7de31ac20f9',
    }]
};
__gj__callback();
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
    id: url.offerId
}, __gj__step2);

function __gj__step2(offer) {
    context.offer = offer;
    __gj__callback();
}
	},
};
exports['cart/index'] = {
};
exports['cart/contacts'] = {
};
exports['cart/confirm'] = {
};
exports['cart/success'] = {
};
exports['profile/index'] = {
};
exports['profile/personal'] = {
};
exports['profile/password'] = {
};
exports['profile/orders'] = {
};
exports['panel/index'] = {
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
    if (post.files.image) {
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
    if (post.files.image) {
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
    if (post.files.image) {
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
    if (post.files.image) {
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

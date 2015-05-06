var sim = require('sim');
var lists = sim.db.lists;

exports.user = function (context, callback) {
	context.user = this.options.user;
	callback(context);
};

exports.sections = function (context, callback) {
    lists.sections.filter({
        parent: 'none'
    }, function (sections) {
        context.mainSections = sections;
        callback(context);
    });
};

exports.menu = function (context, callback) {
    lists.menu.all(function (menuItems) {
        context.mainMenu = menuItems;
        callback(context);
    });
};

exports.secondMenu = function (context, callback) {
    context.secondMenu = [
        { url: '', title: 'Вход' },
        { url: '', title: 'Регистрация' },
        { url: '', title: 'Информация для покупателей' },
        { url: '', title: 'Доставка и оплата' },
        { url: '', title: 'Условия сотрудничества' }
    ];
    callback(context);
};
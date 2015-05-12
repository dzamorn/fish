var sim = require('sim');
var lists = sim.db.lists;

exports.user = function (context, callback) {
	context.user = this.options.user;
	callback(context);
};

exports.options = function (context, callback) {
    lists.options.get({
        root: true
    }, function (options) {
        context.options = options;
        callback(context);
    });
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

exports.second = function (context, callback) {
    lists.second.all(function (menuItems) {
        context.secondMenu = menuItems;
        callback(context);
    });
};
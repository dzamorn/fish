var async = require('async');

context.custom = [];
context.sections = [];

lists.options.get({
    root: true
}, $next);

> (options)
context.options = options;
if (!options.showCustom) {
    $next();
    return;
}
lists.offers.filter({
    onMain: true
}, function (offers) {
    offers.sort(function () {
        var rand = Math.random();
        if (rand > 0.5) { return 1; }
        else { return -1; }
    });
    context.custom = offers;
    $next();
});

>
var sections = [];
if (!context.options.showRandom) {
    $next();
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
        if (rand > 0.5) { return 1; }
        else { return -1; }
    });
    sections = sections.slice(0, +context.options.randomSectionsCount || 3);
    _.each(sections, function (section) {
        section.offers.sort(function () {
            var rand = Math.random();
            if (rand > 0.5) { return 1; }
            else { return -1; }
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
    $next();
}

>
$done();
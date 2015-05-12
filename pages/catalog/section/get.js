lists.sections.get({
    id: url.id
}, $next);

> (section)
context.section = section;
lists.sections.filter({
    parent: section._id + ''
}, $next);

> (sections)
context.section.children = sections;
lists.offers.filter({
    section: context.section._id + ''
}, $next);

> (offers)
context.section.offers = offers;
$done();
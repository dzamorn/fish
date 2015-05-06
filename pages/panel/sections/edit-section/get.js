lists.sections.get({
    _id: url.id
}, $next);

> (section)
context.section = section;
lists.sections.get({
    _id: section.parent
}, $next);

> (parent)
context.parent = parent;
lists.sections.filter({
    parent: context.section._id + ''
}, $next);

> (subsections)
context.subsections = subsections;
lists.offers.filter({
    section: context.section._id + ''
}, $next);

> (offers)
context.offers = offers;
$done();
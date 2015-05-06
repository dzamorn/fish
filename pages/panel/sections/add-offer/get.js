lists.sections.get({
    _id: url.sectionId
}, $next);

> (section)
context.section = section;
$done();
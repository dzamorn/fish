lists.sections.get({
    _id: url.parentId
}, $next);

> (parent)
context.parent = parent;
$done();
lists.sections.get({
    _id: url.id
}, $next);

> (section)
context.section = section;
section.remove($next);

>
if (context.section.parent === 'none') {
    redirect('/panel/sections/');
    return;
}
redirect('/panel/sections/edit-section/' + context.section.parent + '/');
var fs = require('fs');
lists.sections.add({
    id: { $ai: true },
    parent: url.parentId,
    title: post.title
}, $next);

> (section)
if (post.files.image && post.files.image.exists) {
    fs.writeFileSync(__root + '/static/img/sections/' + section.id + '.jpg',
        fs.readFileSync(post.files.image.path));
}
if (url.parentId == 'none') {
    redirect('/panel/sections/');
    return;
}
redirect('/panel/sections/edit-section/' + url.parentId + '/');
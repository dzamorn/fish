var fs = require('fs');
lists.sections.get({
    _id: url.id
}, $next);

> (section)
section.title = post.title;
if (post.files.image) {
    fs.writeFileSync(__root + '/static/img/sections/' + section.id + '.jpg',
        fs.readFileSync(post.files.image.path));
}
section.save($next);

>
redirect(request.url);
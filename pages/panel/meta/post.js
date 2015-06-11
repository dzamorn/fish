lists.meta.get({
    name: 'meta'
}, $next);

> (meta)
if (!meta) {
    lists.meta.add({
        name: 'meta',
        description: post.description,
        keywords: post.keywords
    }, function (meta) {
        redirect('/panel/meta/');
    });
    return;
}
meta.keywords = post.keywords;
meta.description = post.description;
meta.save($next);

>
redirect('/panel/meta/');
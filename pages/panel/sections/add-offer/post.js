var fs = require('fs');
lists.offers.add({
    id: { $ai: true },
    title: post.title,
    price: +post.price,
    description: post.description,
    unit: post.unit,
    content: post.content,
    section: url.sectionId
}, $next);

> (offer)
if (post.files.image) {
    fs.writeFileSync(__root + '/static/img/offers/' + offer.id + '.jpg',
    fs.readFileSync(post.files.image.path));
}
redirect('/panel/sections/edit-section/' + url.sectionId + '/');
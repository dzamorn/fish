var fs = require('fs');
lists.offers.get({
    _id: url.id
}, $next);

> (offer)
offer.title = post.title;
offer.price = post.price;
offer.unit = post.unit;
offer.description = post.description;
offer.content = post.content;
if (post.files.image) {
    fs.writeFileSync(__root + '/static/img/offers/' + offer.id + '.jpg',
        fs.readFileSync(post.files.image.path));
}
offer.save($next);

>
redirect(request.url);
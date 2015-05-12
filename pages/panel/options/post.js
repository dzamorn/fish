lists.options.get({
    root: true
}, $next);

> (options)
options.email = post.email;
options.phone = post.phone;
options.showCustom = post.showCustom === 'on';
options.showRandom = post.showRandom === 'on';
options.randomSectionsCount = +post.randomSectionsCount;
options.randomOffersCount = +post.randomOffersCount;
options.save($next);

>
redirect(request.url);
user.fullName = post.fullName;
user.email = post.email;
user.phone = post.phone;
user.index = post.index;
user.country = post.country;
user.region = post.region;
user.town = post.town;
user.address = post.address;
user.save($next);

> (user)
redirect(request.url);
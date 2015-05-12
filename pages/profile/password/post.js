if (!user.checkPassword(post.currentPassword)) {
    redirect('/profile/password/?error=1');
    return;
}
if (post.password1.length < 3) {
    redirect('/profile/password/?error=2');
    return;
}
if (post.password1 !== post.password2) {
    redirect('/profile/password/?error=3');
    return;
}
user.setPassword(post.password1);
user.save($next);

>
redirect('/profile/password/?success=true');
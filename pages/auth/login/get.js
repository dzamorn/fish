context.get = get;
var url = get.redirect || '/';
if (user.isAuth) {
    redirect(url);
    return;
}
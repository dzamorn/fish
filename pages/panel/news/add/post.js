lists.news.add({
    title: post.title,
    description: post.description,
    content: post.content,
    date: new Date()
}, $next);

> (item)
redirect('/panel/news/');
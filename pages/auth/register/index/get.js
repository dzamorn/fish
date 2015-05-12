context.get = get;
context.errors = [];
_.each(get.errors.split(','), function (code) {
    var message = sim.auth.errorsDescription[code];
    context.errors.push(message);
});
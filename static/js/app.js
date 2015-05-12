angular.module('app', []).

controller('MainController', ['$scope', function ($scope) {
    $scope.offers = [];
    
    server.cart.getOffers(function (result) {
        if (!result.offers) { return; }
        $scope.offers = result.offers;
        $scope.$apply();
    });
    
    $scope.getOffersString = function () {
        var count = 0;
        _.each($scope.offers, function (offer) {
            count += offer.count;
        });
        return count + ' ' + getNumEnding(count, ['товар', 'товара', 'товаров']);
    };
    
    $scope.isAdded = function (id) {
        var isAdded = false;
        _.each($scope.offers, function (offer) {
            if (+offer.id === +id) { isAdded = true; }
        });
        return isAdded;
    };
    
    $scope.getTotalString = function () {
        var total = 0;
        _.each($scope.offers, function (offer) {
            total += offer.count * offer.price;
        });
        return total.spacing() + ' ' + total.rub();
    };
    
    $scope.addOffer = function (id, price, title) {
        var offer = $scope.getOffer(id);
        if (offer) {
            offer.count++;
        } else {
            $scope.offers.push({
                id: id,
                title: title,
                price: price,
                count: 1
            });
        }
        $scope.save();
    };
    
    $scope.removeOffer = function (offer) {
        _.each($scope.offers, function (off, i) {
            if (!off) { return; }
            if (offer.id === off.id) {
                $scope.offers.splice(i, 1);
            }
        });
        $scope.save();
    };
    
    $scope.save = function () {
        server.cart.save($scope.offers, function () {});
    };
    
    $scope.getOffer = function (id) {
        var result = null;
        _.each($scope.offers, function (offer) {
            if (+offer.id === +id) { result = offer; }
        });
        return result;
    };
}]);

$('.auth-required').click(function (event) {
    var url = $(this).attr('data-redirect');
    if (IS_AUTH) { return; }
    event.preventDefault();
    $('.auth-black').fadeIn();
    localStorage.setItem('auth-redirect', url);
});

$('.profile-button').click(function (event) {
    var links = $('.profile-links'),
        button = $(this);
    if (links.css('display') === 'none') {
        event.stopPropagation();
    }
    event.preventDefault();
    links.css({
        left: button.position().left
    });
    button.addClass('active');
    links.show();
});
$(document).bind('click', function () {
    var links = $('.profile-links'),
        button = $('.profile-button');
    links.hide();
    button.removeClass('active');
});
$(window).resize(function () {
    var links = $('.profile-links'),
        button = $('.profile-button');
    if (!IS_AUTH) { return; }
    links.css({
        left: button.position().left
    });
});

Date.prototype.toString = function () {
    var months = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ];
    return this.getDate() + ' ' +
        months[this.getMonth()] + ' ' +
        this.getFullYear() + ' ' +
        ((this.getHours() + '').length === 1 ? '0' + this.getHours() : this.getHours()) + ':' +
        ((this.getMinutes() + '').length === 1 ? '0' + this.getMinutes() : this.getMinutes()) + ':' +
        ((this.getSeconds() + '').length === 1 ? '0' + this.getSeconds() : this.getSeconds());
};

Number.prototype.spacing = function () {
    var str = this + '';
    str = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    return str;
};

Number.prototype.rub = function () {
    return getNumEnding(this, ['рубль', 'рубля', 'рублей']);
};

function getNumEnding(iNumber, aEndings) {
    var sEnding, i;
    iNumber = iNumber % 100;
    if (iNumber>=11 && iNumber<=19) {
        sEnding=aEndings[2];
    }
    else {
        i = iNumber % 10;
        switch (i)
        {
            case (1): sEnding = aEndings[0]; break;
            case (2):
            case (3):
            case (4): sEnding = aEndings[1]; break;
            default: sEnding = aEndings[2];
        }
    }
    return sEnding;
}
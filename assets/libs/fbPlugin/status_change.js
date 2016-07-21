define(['./getFbUserProfile', './getFbAvatar', './getMenu'], function(getFbUserProfile, getFbAvatar, getMenu) {
    return function(response) {
        if (typeof response === 'object' &&
            response.status === 'connected' &&
            typeof response.authResponse === 'object' &&
            response.authResponse.userID) {
            var urlPicture = '/' + response.authResponse.userID + '/picture';
            Promise.all([getFbUserProfile(), getFbAvatar(urlPicture), getMenu(response)])
                .then(function(successAll) {
                    $('.connected-menu').empty();
                    //check role isAdmin
                    var menus = null;
                    if (successAll[2].data &&
                        successAll[2].data.isAdmin) {
                        menus = [
                            { Name: 'Quản lí', icon: 'book', func: 'manageStories();' },
                            { Name: 'Thoát', icon: 'key', func: 'FB.logout();' }
                        ];
                    } else {
                        menus = [
                            { Name: 'Thoát', icon: 'key', func: 'FB.logout()' }
                        ];
                    }
                    menus.forEach(function(menu, index) {
                        $('.connected-menu').append('<a class="item" onClick="' + menu.func + '"><i class="' + menu.icon + ' icon"></i>' + menu.Name + '</a>');
                    });
                    $('.menu-loader').removeClass('active');
                    $('.connected').removeClass('hide');
                    $('.unknown').addClass('hide');
                }, function(err) {
                    //error
                });
        }
    };
});

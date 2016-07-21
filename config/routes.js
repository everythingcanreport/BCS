module.exports.routes = {
    '/': {
        controller: 'HomeController',
        action: 'GetListGoods'
    },
    '/login': {
        controller: 'OAuthController',
        action: 'Login'
    },
    '/fb/login': {
        controller: 'OAuthController',
        action: 'FBLogin'
    },
    '/admin/manage': {
        controller: 'AdminController',
        action: 'Manage'
    },
};

module.exports.routes = {
    '/': {
        controller: 'HomeController',
        action: 'GetListGoods'
    },
    '/login': {
        controller: 'OAuthController',
        action: 'Login'
    },
    '/admin/manage': {
        controller: 'AdminController',
        action: 'Manage'
    }
};

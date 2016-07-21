requirejs.config({
    baseUrl: window.location.origin,
    paths: {
        app: '../working/home',
    }
});
requirejs(['/themes/js/jquery-1.7.2.min.js'], function($) {
    requirejs([
        '/bootstrap/js/bootstrap.min.js',
        '/themes/js/superfish.js',
        '/themes/js/jquery.scrolltotop.js',
        '/themes/js/jquery.flexslider-min.js'
    ], function(bootstrap, superfish, scrolltotop, flexslider) {
        requirejs(['/themes/js/common.js'], function(common) {
            requirejs(['app/main']);
        });
    });
});

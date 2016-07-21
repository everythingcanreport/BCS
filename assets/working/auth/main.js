 define(function(require) {
     //init theme
     $(function() {
         $(document).ready(function() {
             $('.flexslider').flexslider({
                 animation: "fade",
                 slideshowSpeed: 4000,
                 animationSpeed: 600,
                 controlNav: false,
                 directionNav: true,
                 controlsContainer: ".flex-container" // the container that holds the flexslider
             });
         });
     });
     //end init theme
     //facebook plugin
     var fbInit = require('libs/fbPlugin/init');
     var login_event = require('libs/fbPlugin/login_event');
     var logout_event = require('libs/fbPlugin/logout_event');
     var status_change = require('libs/fbPlugin/status_change');
     window.fbAsyncInit = function() {
         fbInit();
         FB.getLoginStatus(function(response) {
             if (typeof response === 'object' &&
                 response.status === 'connected') {} else {
                 $('.menu-loader').removeClass('active');
                 $('.connected').addClass('hide');
                 $('.unknown').removeClass('hide');
             }
         });
         FB.Event.subscribe('auth.login', login_event);
         FB.Event.subscribe('auth.logout', logout_event);
         FB.Event.subscribe('auth.statusChange', status_change);
     };
     (function(d, s, id) {
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {
             return;
         }
         js = d.createElement(s);
         js.id = id;
         js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.6&appId=154268731644622";
         fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
     //end facebook plugin
 });

 //login facebook
 function onClickLoginFacebook() {
     if (navigator.userAgent.match('CriOS')) {
         window.open('https://www.facebook.com/dialog/oauth?client_id=154268731644622&redirect_uri=' + document.location.href + '&scope=email,public_profile&response_type=none', '', true);
     } else {
         FB.login(null, { scope: 'email,public_profile' });
     }
 };
 //end

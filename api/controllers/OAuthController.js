module.exports = {
    Login: function(req, res) {
        res.view('login/login.ejs', {
            locals: {
                baseUrlServer: sails.config.myConfig.baseUrlServer + '/app/appLogin'
            }
        });
    },
    FBLogin: function(req, res) {
        res.ok('success');
    }
};

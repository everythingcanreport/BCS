module.exports = {
    Login: function(req, res) {
        res.view('login/login.ejs', {
            locals: {
                baseUrlServer: sails.config.myConfig + '/login'
            }
        });
    }
};

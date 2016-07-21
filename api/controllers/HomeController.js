module.exports = {
    GetListGoods: function(req, res) {
        res.view('home/home', {
            locals: {
                baseUrlServer: sails.config.myConfig.baseUrlServer + '/app/appHome'
            }
        });
    }
};

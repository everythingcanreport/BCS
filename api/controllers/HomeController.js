module.exports = {
    GetListGoods: function(req, res) {
        res.view('home/home', {
            locals: {}
        });
    }
};

module.exports = {
    Manage: function(req, res) {
        res.view('admin/manage', {
            locals: {
            	baseUrlServer: sails.config.myConfig + '/admin/manage'
            }
        });
    }
};

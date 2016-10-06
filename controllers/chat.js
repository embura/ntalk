module.exports = function(app) {

    var ChatController = {
        index: function(req, res){
            console.log('ChatController req.params[%j]: ',req.params);

            var resultado = { email: req.params.email };
            res.render('chat/index', resultado);
        }
    };
    return ChatController;
};
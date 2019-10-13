
exports.getStart = function(req, res) {
    res.render('start');
}
exports.getSearch = function(req,res){
    res.render('search');
}

exports.getCreateOrder = function(req, res) {
    res.render('createOrder');
}

exports.getHome = function(req, res) {
    res.end('Hello world')
}
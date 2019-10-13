
exports.getStart = function(req, res) {
    res.render('start');
}

exports.getSearch = function(req,res){
    var foundJobs = require('../mocks/mockJobs').getJobs();
    res.render('search',{foundJobs: foundJobs });
}

exports.getCreateOrder = function(req, res) {
    res.render('createOrder');
}

exports.getHome = function(req, res) {
    res.end('Hello world')
}
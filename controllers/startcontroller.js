
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

exports.getLogin = function(req, res) {
    res.render('Login');
}

exports.getRegister = function(req, res) {
    res.render('Register');
}

exports.getHome = function(req, res) {
    res.end('Hello world')
}

exports.getJobs = function(req, res) {
    var foundJobs = require('../mocks/mockJobs').getJobs();
   res.send(foundJobs);
}
module.exports = function(app) {
    var startcontroller = require("../controllers/startcontroller")
    app.route('/start').get(startcontroller.getStart)
    app.route('/createOrder').get(startcontroller.getCreateOrder)
    app.route('/').get(startcontroller.getHome)
}
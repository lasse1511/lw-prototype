module.exports = function(app) {
    var startcontroller = require("../controllers/startcontroller")
    app.route('/').get(startcontroller.getStart)
    app.route('/createOrder').get(startcontroller.getCreateOrder)


    app.route('/search').get(startcontroller.getSearch);

    app.route('/contact').get(startcontroller.getContact);
    app.route('/about').get(startcontroller.getAbout);
    app.route('/logout').get(startcontroller.logout)

    app.route('/login').get(startcontroller.getLogin);
    app.route('/register').get(startcontroller.getRegister);
    app.route('/getjobs').get(startcontroller.getJobs);
    app.route('/').get(startcontroller.getHome)
}
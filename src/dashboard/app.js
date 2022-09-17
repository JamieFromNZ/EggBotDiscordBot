const express = require("express");
//const path = require("node:path");

module.exports = async (client) => {
    const app = express();

    /*
    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('html')._express);
    app.set('view engine', 'html');

    app.get('/', function(req, res){
        res.render('index');
    });
    */

    app.use(express.static('src/dashboard/views/'));

    app.listen(3000);

    console.log("Website online, listening on http://localhost:3000/");
}
